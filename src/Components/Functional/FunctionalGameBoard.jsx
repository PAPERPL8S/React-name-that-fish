import React, { useState, useEffect } from "react";
import "./styles/game-board.css";

export function FunctionalGameBoard({ fishData, onAnswerSubmitted }) {
  const [userGuess, setUserGuess] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const submittedAnswer = userGuess.value.trim().toLowerCase();
    onAnswerSubmitted(submittedAnswer);
    setUserGuess("");
  };

  const { name, url } = fishData;

  return (
    <div id="game-board">
      <div id="fish-container">{url && <img src={url} alt={name} />}</div>
      <form id="fish-guess-form" onSubmit={handleFormSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          id="fish-guess"
          name="fish-guess"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FunctionalGameBoard;
