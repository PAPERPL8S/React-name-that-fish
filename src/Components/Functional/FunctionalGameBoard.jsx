import React, { useState, useEffect } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import FunctionalFinalScore from "./FunctionalFinalScore";

export function FunctionalGameBoard({
  answersLeft,
  onAnswerSubmitted,
  onUpdateAnswersLeft,
}) {
  const fishInfo = [
    { name: "trout", url: Images.trout },
    { name: "salmon", url: Images.salmon },
    { name: "tuna", url: Images.tuna },
    { name: "shark", url: Images.shark },
  ];

  const [remainingFish, setRemainingFish] = useState([...fishInfo]);
  const [currentFishIndex, setCurrentFishIndex] = useState(null);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    if (remainingFish.length > 0) {
      selectNextFish();
    } else {
      calculateFinalScore();
    }
  }, [remainingFish]);

  const selectNextFish = () => {
    const nextIndex = Math.floor(Math.random() * remainingFish.length);
    setCurrentFishIndex(nextIndex);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const submittedAnswer = event.target.elements["fish-guess"].value
      .trim()
      .toLowerCase();
    const correctAnswer = remainingFish[currentFishIndex]?.name.toLowerCase();

    const isCorrect = submittedAnswer === correctAnswer;

    onUpdateAnswersLeft(
      answersLeft.filter((answer) => answer !== correctAnswer),
    );
    onAnswerSubmitted(isCorrect);

    if (isCorrect) {
      setCorrectCount((prevCorrectCount) => prevCorrectCount + 1);
    }

    setRemainingFish((prevRemainingFish) =>
      prevRemainingFish.filter((fish) => fish.name !== correctAnswer),
    );

    event.target.reset();
  };

  const calculateFinalScore = () => {
    setShowFinalScore(true);
  };

  const { name, url } = remainingFish[currentFishIndex] || {};

  return (
    <div id="game-board">
      <>
        {showFinalScore ? (
          <FunctionalFinalScore correctCount={correctCount} />
        ) : (
          <>
            <div id="fish-container">{url && <img src={url} alt={name} />}</div>
            <form id="fish-guess-form" onSubmit={handleFormSubmit}>
              <label htmlFor="fish-guess">What kind of fish is this?</label>
              <input type="text" id="fish-guess" name="fish-guess" />
              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </>
    </div>
  );
}

export default FunctionalGameBoard;
