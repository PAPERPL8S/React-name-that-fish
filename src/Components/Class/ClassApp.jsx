import React, { Component } from "react";
import "./styles/score-board.css";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import ClassFinalScore from "./ClassFinalScore";
import "./styles/score-board.css";
import "./styles/game-board.css";
import "./styles/final-score.css";
import "../../App.css";

class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFinalScore: false,
      answersLeft: ["trout", "salmon", "tuna", "shark"],
      incorrectCount: 0,
      correctCount: 0,
    };
  }

  handleAnswersSubmitted = (isCorrect) => {
    if (isCorrect) {
      this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1,
      }));
    } else {
      this.setState((prevState) => ({
        incorrectCount: prevState.incorrectCount + 1,
      }));
    }
    if (this.state.answersLeft.length === 1) {
      this.setState({ showFinalScore: true });
    }
  };

  updateAnswersLeft = (selectedFish) => {
    this.setState((prevState) => ({
      answersLeft: prevState.answersLeft.filter(
        (fish) => fish !== selectedFish,
      ),
    }));
  };

  render() {
    const { showFinalScore, answersLeft, incorrectCount, correctCount } =
      this.state;

    return (
      <>
        <ClassScoreBoard
          incorrectCount={incorrectCount}
          correctCount={correctCount}
          answersLeft={answersLeft}
        />
        {!showFinalScore && (
          <ClassGameBoard
            answersLeft={answersLeft}
            onAnswerSubmitted={this.handleAnswersSubmitted}
            onUpdateAnswersLeft={this.updateAnswersLeft}
          />
        )}
        {showFinalScore && <ClassFinalScore correctCount={correctCount} />}
      </>
    );
  }
}

export default ClassApp;
