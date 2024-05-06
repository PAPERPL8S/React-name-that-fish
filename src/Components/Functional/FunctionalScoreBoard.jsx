import React from "react";
import "./styles/score-board.css";

export function FunctionalScoreBoard({ incorrectCount, correctCount, answersLeft = [],
}) {

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}

export default FunctionalScoreBoard;