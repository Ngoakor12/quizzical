import "./App.css";
import { useState } from "react";
import StartScreen from "./components/StartScreen/StartScreen";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const [isReady, setIsReady] = useState(false);

  function startGame() {
    setIsReady(true);
  }

  return <>{isReady ? <Quiz /> : <StartScreen startGame={startGame} />}</>;
}

export default App;
