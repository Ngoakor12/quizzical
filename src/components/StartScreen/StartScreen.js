import Footer from "../Footer/Footer";
import Form from "../Form/Form";
const StartScreen = (props) => {
  return (
    <div className="start-screen">
      <h1 className="quiz-title">Quizzical</h1>
      <p className="quiz-description">A simple general knowledge trivia game</p>
      <Form handleFormChange={props.handleFormChange} form={props.form} />
      <button className="start-quiz-button" onClick={props.startGame}>
        Start Game
      </button>
      <Footer />
    </div>
  );
};

export default StartScreen;
