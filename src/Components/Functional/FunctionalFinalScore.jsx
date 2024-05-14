import React from "react";
import "./styles/final-score.css";

export const FunctionalFinalScore = ({ correctCount, totalCount }) => {
  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correctCount}</p>
        <hr />
        <p>{totalCount}</p>
      </div>
    </div>
  );
};

export default FunctionalFinalScore;
