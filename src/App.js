import "./App.css";
import { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen/StartScreen";
import { nanoid } from "nanoid";

function App() {
  const [isReady, setIsReady] = useState(false);
  const [questions, setQuestions] = useState([]);
  // const [isCompleted, setIsCompleted] = useState(false);
  const [isCheckingAnswer, setIsCheckingAnswers] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getQuestions();
  }, []);

  function getQuestions() {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        const questionData = data.results.map((question) => {
          return {
            question: question.question,
            difficulty: question.difficulty,
            category: question.category,
            id: nanoid(),
            answers: [
              ...question.incorrect_answers.map((answer) => ({
                answer: answer,
                isCorrect: false,
                isSelected: false,
                id: nanoid(),
              })),
              {
                answer: question.correct_answer,
                isCorrect: true,
                isSelected: false,
                id: nanoid(),
              },
            ],
          };
        });
        setQuestions(questionData);
      });
  }

  console.log(questions);

  function startGame() {
    setIsReady(true);
  }

  function toggleSelected(answerId, questionId) {
    // console.log("clicked", id);
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
    getQuestions();
    setIsCheckingAnswers(false);
  }

  function calculateScore() {
    setIsCheckingAnswers(true);
    questions.forEach((question) => {
      question.answers.forEach((answer) => {
        if (answer.isSelected && answer.isCorrect)
          setScore((prevScore) => prevScore + 1);
      });
    });
  }

  let quizQuestions = questions.map((questionContainer) => {
    const answers = [...questionContainer.answers];
    return (
      <div key={nanoid()} className="question-container">
        <div className="question">{questionContainer.question}</div>
        <div className="answers">
          {answers.map((answer) => (
            <div
              key={nanoid()}
              className="answer"
              onClick={() => toggleSelected(answer.id, questionContainer.id)}
              style={{
                backgroundColor: answer.isSelected
                  ? "hsl(230, 61%, 90%)"
                  : "none",
                border: answer.isSelected
                  ? "0.8px solid hsl(230, 61%, 90%)"
                  : "0.8px solid #4d5b9e",
              }}
            >
              {answer.answer}
            </div>
          ))}
        </div>
        <hr className="question-divider" />
      </div>
    );
  });

  let quizButton = isCheckingAnswer ? (
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

  let quiz = (
    <>
      {quizQuestions}
      {quizButton}
    </>
  );
  return <>{isReady ? quiz : <StartScreen startGame={startGame} />}</>;
}

export default App;
