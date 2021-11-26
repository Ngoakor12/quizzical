const Question = (props) => {
  const answers = [
    ...props.question.incorrect_answers,
    props.question.correct_answer,
  ];

  const answersElements = answers
    .map((answer) => (
      <div key={answer} onClick={props.toggleSelected}>
        {answer}
      </div>
    ))
    .sort(() => Math.random() - 0.5);

  return (
    <div>
      {props.question.question}
      {answersElements}
    </div>
  );
};

export default Question;
