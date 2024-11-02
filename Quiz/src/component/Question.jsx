import React from 'react';

const Question = ({ data, handleAnswer }) => {
  return (
    <div className="question-container">
      <h2>{data.question}</h2>
      <div className="options-container">
        {data.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;