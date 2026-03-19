import { useState } from "react";
import Result from "./results";

function Quiz() {
  const questionBank = [
    {
      question: "What is it?",
      options: ["Berlin", "London"],
      answer: "Berlin",
    },
    {
      question: "What does JSX stand for",
      options: ["Javascript XML", "Java Syntax extension"],
      answer: "Javascript XML",
    },
  ];

  const initialAnswers = [null, null, null];

  //Store anwsers
  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  //Question number
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const selectedAnswer = userAnswers[currentQuestion];

  const [isQuizFinished, setIsQuizFinished] = useState(false);
  function handleSelectOption(option) {
    // setOptionSelected(option);
    const newUserAnswer = [...userAnswers];
    newUserAnswer[currentQuestion] = option;

    setUserAnswers(newUserAnswer);
  }
  function toNext() {
    if (currentQuestion === questionBank.length - 1) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }
  function toPrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  if (isQuizFinished) {
    return <Result />;
  }

  return (
    <div className="">
      {""}
      <h2>Question {currentQuestion + 1}</h2>
      <p className="question">{questionBank[currentQuestion].question}</p>

      {questionBank[currentQuestion].options.map((option) => (
        <button
          className={
            `option bg-gray-100` +
            (selectedAnswer === option ? ` selected ` : ``)
          }
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}
      {/* <p>Option Selected: {optionSelected}</p> */}

      <div className="navigation">
        <button
          onClick={toPrev}
          disabled={currentQuestion === 0 ? "disabled" : ""}
          className=" float-left bg-blue-500 text-white disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={toNext}
          disabled={!selectedAnswer}
          className=" float-right bg-blue-500 text-white disabled:opacity-50"
        >
          {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
}
export default Quiz;
