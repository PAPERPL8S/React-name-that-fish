import React, { Component } from "react";

import "./styles/final-score.css";

const initialTotalCount = 0;
const initialCorrectCount = 0;

export class ClassFinalScore extends Component {
  state = {
    totalCount: initialTotalCount,
    correctCount: initialCorrectCount,
  };

  render() {
    const { totalCount, correctCount } = this.state;
    const { isVisible } = this.props;
    return (
      <div id="final-score" style={{ display: isVisible ? "block" : "none" }}>
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}

export default ClassFinalScore;
