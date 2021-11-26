const StartScreen = (props) => {
  return (
    <div>
      <h1>Quizzical</h1>
      <button onClick={props.startGame}>Start Game</button>
    </div>
  );
};

export default StartScreen;
