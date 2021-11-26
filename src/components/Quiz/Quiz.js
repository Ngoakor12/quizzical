import Question from "../Question/Question";

const Quiz = (props) => {
  const questions = props.questions.map((question) => (
    <Question
      key={question.question}
      question={question}
      toggleSelected={props.toggleSelected}
    />
  ));
  return <div>{questions}</div>;
};

export default Quiz;
