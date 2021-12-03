import Footer from "../Footer/Footer";
const StartScreen = (props) => {
  return (
    <div className="start-screen">
      <h1 className="quiz-title">Quizzical</h1>
      <p className="quiz-description">A simple general knowledge trivia game</p>
      <button className="start-quiz-button" onClick={props.startGame}>
        Start Game
      </button>
      <Footer />
    </div>
  );
};

export default StartScreen;
