import Footer from "../Footer/Footer";
import Form from "../Form/Form";
const StartScreen = (props) => {
  return (
    <div className="start-screen">
      <header className="startscreen-header">
        <h1 className="quiz-title">Quizzical</h1>
        <p className="quiz-description">
          A trivia game for learning and testing yourself on different topics
        </p>
      </header>
      <div className="game-controls">
        <Form handleFormChange={props.handleFormChange} form={props.form} />
        <button className="start-quiz-button" onClick={props.startGame}>
          Start Game
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default StartScreen;
