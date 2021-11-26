import "./App.css";
import { useState, useEffect } from "react";
// import Quiz from "./components/Quiz/Quiz";
import StartScreen from "./components/StartScreen/StartScreen";
import Quiz from "./components/Quiz/Quiz";
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
          return { id: nanoid(), isSelected: false, ...question };
        });
        setQuestions(questionData);
      });
  }, []);

  console.log(questions);

  function startGame() {
    setIsReady(true);
  }

  function toggleSelected(questions) {
    console.log("clicked", questions[0]["id"]);
  }

  return (
    <main>
      {isReady ? (
        <Quiz
          questions={questions}
          toggleSelected={() => toggleSelected(questions)}
        />
      ) : (
        <StartScreen startGame={startGame} />
      )}
    </main>
  );
}

export default App;
