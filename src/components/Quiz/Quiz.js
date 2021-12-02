import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Question from "../Question/Question";
import Answer from "../Answer/Answer";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [isCheckingAnswer, setIsCheckingAnswers] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getQuestions(
      "https://opentdb.com/api.php?amount=5&category=9&type=multiple&encode=base64"
    );
  }, []);

  // - This function fixes the issue of not rendering html entities correctly.
  // - The data has to be encoded as base64 in the api url(e.g. &encode=base64).
  function base64ToUTF8(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  function getQuestions(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const questionData = data.results.map((question) => {
          return {
            question: base64ToUTF8(question.question),
            difficulty: question.difficulty,
            category: question.category,
            id: nanoid(),
            answers: [
              ...question.incorrect_answers.map((answer) => ({
                answer: base64ToUTF8(answer),
                isCorrect: false,
                isSelected: false,
                id: nanoid(),
              })),
              {
                answer: base64ToUTF8(question.correct_answer),
                isCorrect: true,
                isSelected: false,
                id: nanoid(),
              },
            ].sort(() => Math.random() - 0.5),
          };
        });
        setQuestions(questionData);
      });
  }

  function toggleSelected(answerId, questionId) {
    setQuestions((prevQuestions) =>
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
    getQuestions(
      "https://opentdb.com/api.php?amount=5&category=9&type=multiple&encode=base64"
    );
    setIsCheckingAnswers(false);
    setScore(0);
  }

  function calculateScore() {
    // check if all questions are answered
    let questionsAnswered = 0;
    questions.forEach((question) => {
      question.answers.forEach((answer) => {
        if (answer.isSelected) questionsAnswered++;
      });
    });

    if (questionsAnswered !== 5) {
      alert("Please answer all the questions to check answers");
    } else {
      setIsCheckingAnswers(true);
      questions.forEach((question) => {
        question.answers.forEach((answer) => {
          if (answer.isSelected && answer.isCorrect)
            setScore((prevScore) => prevScore + 1);
        });
      });
    }
  }

  const quizQuestions = questions.map((questionContainer) => {
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
                isCheckingAnswer={isCheckingAnswer}
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

  const quizButtonSection = isCheckingAnswer ? (
    <div className="quiz-button-section">
      <p className="quiz-score">You scored {score}/5 correct answers</p>
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
    </>
  );
}

export default Quiz;
