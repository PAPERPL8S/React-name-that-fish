import React, { Component } from "react";
import "./styles/score-board.css";

const initialIncorrectCount = 0;
const initialCorrectCount = 0;
const initialAnswersLeft = ["trout", "salmon", "tuna", "shark"];

export class ClassScoreBoard extends Component {
  state = {
    incorrectCount: initialIncorrectCount,
    correctCount: initialCorrectCount,
    answersLeft: [...initialAnswersLeft],
  };

  render() {
    const { incorrectCount, correctCount, answersLeft } = this.state;
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
}

export default ClassScoreBoard;