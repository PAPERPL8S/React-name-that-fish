import React, { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import "./styles/score-board.css";
import "./styles/game-board.css";
import "./styles/final-score.css";
import { fishInfo } from "../../constants/fishData";

export function FunctionalApp() {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const guessesSum = incorrectCount + correctCount;
  const isGameOver = guessesSum === fishInfo.length;
  const answersLeft = fishInfo.map((fish) => fish.name).slice(guessesSum);

  const handleAnswersSubmitted = (answer) => {
    if (answer === fishInfo[guessesSum].name) {
      setCorrectCount((prevCorrectCount) => prevCorrectCount + 1);
    } else {
      setIncorrectCount((prevIncorrectCount) => prevIncorrectCount + 1);
    }
  };

  return (
    <>
      {!isGameOver && (
        <>
          <FunctionalScoreBoard
            incorrectCount={incorrectCount}
            correctCount={correctCount}
            answersLeft={answersLeft}
          />
          <FunctionalGameBoard
            fishInfo={fishInfo[guessesSum]}
            onAnswerSubmitted={handleAnswersSubmitted}
          />
        </>
      )}
      {showFinalScore && (
        <FunctionalFinalScore
          totalCount={fishInfo.length}
          correctCount={correctCount}
        />
      )}
    </>
  );
}

export default FunctionalApp;
