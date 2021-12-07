import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import StartScreen from "./components/StartScreen/StartScreen";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const [form, setForm] = useState({
    difficulty: "easy",
    category: 9,
  });
  const [isReady, setIsReady] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [isCheckingAnswer, setIsCheckingAnswer] = useState(false);
  const [score, setScore] = useState(0);

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

  // - This function fixes the issue of not rendering html entities correctly.
  // - The data has to be encoded as base64 in the api url(e.g. &encode=base64).
  function base64ToUTF8(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm((prevform) => ({
      ...prevform,
      [name]: value,
    }));
  }

  function startGame() {
    try {
      getQuestions(
        `https://opentdb.com/api.php?amount=5&category=${form.category}&difficulty=${form.difficulty}&type=multiple&encode=base64`
      );
    } catch (error) {
      console.error(error.message);
    }
    setIsReady(true);
  }

  return (
    <>
      {isReady ? (
        <Quiz
          questions={questions}
          setQuestions={setQuestions}
          isCheckingAnswer={isCheckingAnswer}
          setIsCheckingAnswer={setIsCheckingAnswer}
          score={score}
          setScore={setScore}
          getQuestions={getQuestions}
          form={form}
          setForm={setForm}
        />
      ) : (
        <StartScreen
          startGame={startGame}
          handleFormChange={handleFormChange}
          form={form}
          isReady={isReady}
          setIsReady={setIsReady}
        />
      )}
    </>
  );
}

export default App;
