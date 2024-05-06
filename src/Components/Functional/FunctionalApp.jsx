import React, { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import "./styles/score-board.css";
import "./styles/game-board.css";
import "./styles/final-score.css";
import "../../App.css";

export function FunctionalApp() {
  const [showFinalScore, setShowFinalScore] = useState(false);

  const handleToggleFinalScore = () => {
    setShowFinalScore((prevShowFinalScore) => !prevShowFinalScore);
  };

  return (
    <>
      <FunctionalScoreBoard />
      <FunctionalGameBoard />
      {showFinalScore && <FunctionalFinalScore />}
      <button onClick={handleToggleFinalScore}>
        {showFinalScore ? "Hide Final Score" : "Show Final Score"}
      </button>
    </>
  );
}

export default FunctionalApp;
