import "./App.css";
import { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen/StartScreen";
import { nanoid } from "nanoid";

function App() {
  const [isReady, setIsReady] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        const questionData = data.results.map((question) => {
          return {
            ...question,
            id: nanoid(),
            incorrect_answers: [
              ...question.incorrect_answers.map((answer) => ({
                answer: answer,
                isSelected: false,
                id: nanoid(),
              })),
              {
                answer: question.correct_answer,
                isSelected: false,
                id: nanoid(),
              },
            ],
          };
        });
        setQuestions(questionData);
      });
  }, [questions.incorrect_answers]);

  console.log(questions);

  function startGame() {
    setIsReady(true);
  }

  function toggleSelected(id) {
    console.log("clicked", id);
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => ({
        ...question,
        incorrect_answers: question.incorrect_answers.map((answerObj) => {
          if (answerObj.id === id) {
            return { ...answerObj, isSelected: !answerObj.isSelected };
          } else {
            return answerObj;
          }
        }),
      }))
    );
  }

  let quiz = questions.map((questionContainer) => {
    const answers = [...questionContainer.incorrect_answers];
    return (
      <div key={nanoid()} className="question-container">
        <div className="question">{questionContainer.question}</div>
        {answers.map((answer) => (
          <div
            key={nanoid()}
            className="answer"
            onClick={() => toggleSelected(answer.id)}
            style={{
              backgroundColor: answer.isSelected ? "red" : "none",
            }}
          >
            {answer.answer}
          </div>
        ))}
      </div>
    );
  });

  return <main>{isReady ? quiz : <StartScreen startGame={startGame} />}</main>;
}

export default App;
