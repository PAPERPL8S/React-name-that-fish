import React, { Component } from "react";
import "./styles/final-score.css";
import "../../App.css";

export class ClassFinalScore extends Component {
  state = {
    totalCount: 4,
    correctCount: this.props.correctCount,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.isVisible !== this.props.isVisible && this.props.isVisible) {
      this.setState({
        totalCount: this.props.totalCount,
        correctCount: this.props.correctCount,
      });
    }
  }

  render() {
    const { isVisible } = this.props;
    const { totalCount, correctCount } = this.state;

    return (
      <div id="final-score" style={{ display: isVisible ? "block" : "" }}>
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
