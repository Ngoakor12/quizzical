const Answer = (props) => {
  const checkingAnswerStyles = {
    backgroundColor:
      props.answer.isSelected && props.answer.isCorrect
        ? "#94d7a2"
        : props.answer.isSelected && !props.answer.isCorrect
        ? "#f8bcbc"
        : !props.answer.isSelected && props.answer.isCorrect
        ? "#94d7a2"
        : "none",
    border:
      props.answer.isSelected && props.answer.isCorrect
        ? "0.8px solid #94d7a2"
        : props.answer.isSelected && !props.answer.isCorrect
        ? "0.8px solid #f8bcbc"
        : !props.answer.isSelected && props.answer.isCorrect
        ? "#94d7a2"
        : "0.8px solid #4d5b9e",
    opacity: !props.answer.isSelected && !props.answer.isCorrect ? "0.5" : "1",
  };

  const normalStyles = {
    backgroundColor: props.answer.isSelected ? "hsl(230, 61%, 90%)" : "none",
    border: props.answer.isSelected
      ? "0.8px solid hsl(230, 61%, 90%)"
      : "0.8px solid #4d5b9e",
  };

  return (
    <div
      className="answer"
      onClick={props.toggleSelected}
      style={props.isCheckingAnswer ? checkingAnswerStyles : normalStyles}
    >
      {props.answer.answer}
    </div>
  );
};

export default Answer;
