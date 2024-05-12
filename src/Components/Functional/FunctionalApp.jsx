import React, { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import "./styles/score-board.css";
import "./styles/game-board.css";
import "./styles/final-score.css";

export function FunctionalApp() {
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [answersLeft, setAnswersLeft] = useState([
    "trout",
    "salmon",
    "tuna",
    "shark",
  ]);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const handleAnswersSubmitted = (isCorrect) => {
    if (isCorrect) {
      setCorrectCount((prevCorrectCount) => prevCorrectCount + 1);
    } else {
      setIncorrectCount((prevIncorrectCount) => prevIncorrectCount + 1);
    }
    if (answersLeft.length === 1) {
      setShowFinalScore(true);
    }
  };

  const updateAnswersLeft = (selectedFish) => {
    setAnswersLeft((prevAnswersLeft) =>
      prevAnswersLeft.filter((fish) => fish !== selectedFish),
    );
  };

  return (
    <>
      <FunctionalScoreBoard
        incorrectCount={incorrectCount}
        correctCount={correctCount}
        answersLeft={answersLeft}
      />
      {!showFinalScore && (
        <FunctionalGameBoard
          answersLeft={answersLeft}
          onAnswerSubmitted={handleAnswersSubmitted}
          onUpdateAnswersLeft={updateAnswersLeft}
        />
      )}
      {showFinalScore && <FunctionalFinalScore correctCount={correctCount} />}
    </>
  );
}

export default FunctionalApp;
