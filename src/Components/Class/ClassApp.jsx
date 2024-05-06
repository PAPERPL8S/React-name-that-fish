import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import "./styles/score-board.css";
import "./styles/game-board.css";
import "./styles/final-score.css";
import "../../App.css";

export class ClassApp extends Component {
  state = {
    showFinalScore: false,
  };

  toggleFinalScore = () => {
    this.setState((prevState) => ({
      showFinalScore: !prevState.showFinalScore,
    }));
  };

  render() {
    const { showFinalScore } = this.state; // Access showFinalScore from state
    return (
      <>
        <>
          <ClassScoreBoard />
          <ClassGameBoard />
          {showFinalScore && <ClassFinalScore />}
          <button onClick={this.toggleFinalScore}>
            {showFinalScore ? "Hide Final Score" : "Show Final Score"}
          </button>
        </>
      </>
    );
  }
}

export default ClassApp;
