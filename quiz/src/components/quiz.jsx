import { useState } from "react";
function Quiz() {
  const questionBank = [
    {
      question: "What is it?",
      options: ["Berlin", "London"],
    },
  ];

  //   var optionSelected = "None";

  const [optionSelected, setOptionSelected] = useState("None");

  function handleSelectOption(option) {
    // optionSelected = option
    setOptionSelected(option);
  }
  return (
    <div className="">
      {""}
      <h2>Question 1</h2>
      <p className="question">{questionBank[0].question}</p>

      {questionBank[0].options.map((option) => (
        <button
          className="option bg-gray-100"
          onClick={() => handleSelectOption(option)}
        >
          {option}{" "}
        </button>
      ))}
      <p>Option Selected: {optionSelected}</p>

      <div className="navigation">
        <button className=" float-left bg-blue-500 text-white">Previous</button>
        <button className=" float-right bg-blue-500 text-white">Next</button>
      </div>
    </div>
  );
}
export default Quiz;
