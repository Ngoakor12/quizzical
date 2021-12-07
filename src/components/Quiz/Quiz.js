import { nanoid } from "nanoid";
import Question from "../Question/Question";
import Answer from "../Answer/Answer";
import Footer from "../Footer/Footer";

function Quiz(props) {
  const { difficulty, category } = props.form;

  function toggleSelected(answerId, questionId) {
    props.setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        return {
          ...question,
          answers: question.answers.map((answerObj) => {
            if (answerObj.id === answerId) {
              return { ...answerObj, isSelected: !answerObj.isSelected };
            } else if (
              answerObj.id !== answerId &&
              question.id === questionId
            ) {
              return { ...answerObj, isSelected: false };
            } else {
              return answerObj;
            }
          }),
        };
      })
    );
  }

  function restartGame() {
    try {
      props.getQuestions(
        `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple&encode=base64`
      );
    } catch (error) {
      console.error(error.message);
    }
    props.setIsCheckingAnswer(false);
    props.setScore(0);
  }

  function calculateScore() {
    // check if all questions are answered
    let questionsAnswered = 0;
    props.questions.forEach((question) => {
      question.answers.forEach((answer) => {
        if (answer.isSelected) questionsAnswered++;
      });
    });

    if (questionsAnswered !== 5) {
      alert("Please answer all the questions to check answers");
    } else {
      props.setIsCheckingAnswer(true);
      props.questions.forEach((question) => {
        question.answers.forEach((answer) => {
          if (answer.isSelected && answer.isCorrect)
            props.setScore((prevScore) => prevScore + 1);
        });
      });
    }
  }

  const quizQuestions = props.questions.map((questionContainer) => {
    const answers = [...questionContainer.answers];
    return (
      <div key={nanoid()} className="question-container">
        <Question key={nanoid()} question={questionContainer.question} />
        <div key={nanoid()} className="answers">
          {answers.map((answer) => {
            return (
              <Answer
                key={nanoid()}
                answer={answer}
                question={questionContainer}
                isCheckingAnswer={props.isCheckingAnswer}
                toggleSelected={() =>
                  toggleSelected(answer.id, questionContainer.id)
                }
              />
            );
          })}
        </div>
        <hr className="question-divider" />
      </div>
    );
  });

  const quizButtonSection = props.isCheckingAnswer ? (
    <div className="quiz-button-section">
      <p className="quiz-score">You scored {props.score}/5 correct answers</p>
      <button className="quiz-button" onClick={restartGame}>
        Play again
      </button>
    </div>
  ) : (
    <div className="quiz-button-section">
      <button className="quiz-button" onClick={calculateScore}>
        Check answer
      </button>
    </div>
  );

  return (
    <>
      {quizQuestions}
      {quizButtonSection}
      <Footer />
    </>
  );
}

export default Quiz;
