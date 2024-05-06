import React from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";

export function FunctionalGameBoard({ answersLeft }) {
  const fishInfo = [
    { name: "trout", url: Images.trout },
    { name: "salmon", url: Images.salmon },
    { name: "tuna", url: Images.tuna },
    { name: "shark", url: Images.shark },
  ];
  const { name, url } = fishInfo[0];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const submittedAnswer = event.target.elements["fish-guess"].value
      .trim()
      .toLowerCase();
    const correctAnswer = answersLeft[0].toLowerCase();

    if (submittedAnswer === correctAnswer) {
      console.log("You got it!");
    } else {
      console.log("That's not it!");
    }

    event.target.reset();
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={url} alt={name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleFormSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" id="fish-guess" name="fish-guess" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default FunctionalGameBoard;
