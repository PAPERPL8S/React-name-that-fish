import React, { Component } from "react";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import "./styles/score-board.css";
import "./styles/game-board.css";
import "./styles/final-score.css";
import { fishInfo } from "../../constants/fishData";

class ClassApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectCount: 0,
      correctCount: 0,
    };
  }

  handleAnswersSubmitted = (answer) => {
    const { incorrectCount, correctCount } = this.state;
    const guessesSum = incorrectCount + correctCount;

    const statePropertyToUpdate = answer === fishInfo[guessesSum].name ? 'correctCount' : 'incorrectCount'
    
    this.setState((prevState) => ({
      [statePropertyToUpdate]: prevState[statePropertyToUpdate] + 1,
    }));
  };

  render() {
    const { incorrectCount, correctCount } = this.state;
    const guessesSum = incorrectCount + correctCount;
    const isGameOver = guessesSum === fishInfo.length;
    const answersLeft = fishInfo.map((fish) => fish.name).slice(guessesSum);

    return (
      <>
        {!isGameOver && (
          <>
            <ClassScoreBoard
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              fishInfo={fishInfo[guessesSum]}
              onAnswerSubmitted={this.handleAnswersSubmitted}
            />
          </>
        )}
        {isGameOver && (
          <ClassFinalScore
            totalCount={fishInfo.length}
            correctCount={correctCount}
          />
        )}
      </>
    );
  }
}

export default ClassApp;
