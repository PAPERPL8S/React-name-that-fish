import React, { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import ClassFinalScore from "./ClassFinalScore";

export class ClassGameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fishInfo: [
        { name: "trout", url: Images.trout },
        { name: "salmon", url: Images.salmon },
        { name: "tuna", url: Images.tuna },
        { name: "shark", url: Images.shark },
      ],
      remainingFish: [],
      currentFishIndex: null,
      showFinalScore: false,
      correctCount: 0,
    };
  }

  componentDidMount() {
    const { fishInfo } = this.state;
    this.setState({ remainingFish: [...fishInfo] });
    this.selectNextFish();
  }
  componentDidUpdate(prevProps, prevState) {
    const { remainingFish } = this.state;
    if (
      prevState.remainingFish.length !== remainingFish.length &&
      remainingFish.length > 0
    ) {
      this.selectNextFish();
    } else if (
      prevState.remainingFish.length !== remainingFish.length &&
      remainingFish.length === 0
    ) {
      this.calculateFinalScore();
    }
  }

  selectNextFish = () => {
    const { remainingFish } = this.state;
    if (remainingFish.length > 0) {
      const nextIndex = Math.floor(Math.random() * remainingFish.length);
      this.setState({ currentFishIndex: nextIndex });
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const submittedAnswer = event.target.elements["fish-guess"].value
      .trim()
      .toLowerCase();
    const { remainingFish, currentFishIndex } = this.state;
    const correctAnswer = remainingFish[currentFishIndex]?.name.toLowerCase();
    const { onAnswerSubmitted, onUpdateAnswersLeft, answersLeft } = this.props;

    const isCorrect = submittedAnswer === correctAnswer;

    onUpdateAnswersLeft(
      answersLeft.filter((answer) => answer !== correctAnswer),
    );
    onAnswerSubmitted(isCorrect);

    if (isCorrect) {
      this.setState((prevState) => ({
        correctCount: prevState.correctCount + 1,
      }));
    }

    const updatedRemainingFish = remainingFish.filter(
      (fish) => fish.name !== correctAnswer,
    );

    this.setState({ remainingFish: updatedRemainingFish });

    if (updatedRemainingFish.length === 0) {
      this.calculateFinalScore();
    }

    event.target.reset();
  };

  calculateFinalScore = () => {
    this.setState({ showFinalScore: true });
  };

  render() {
    const { remainingFish, currentFishIndex, showFinalScore, correctCount } =
      this.state;
    const { name, url } = remainingFish[currentFishIndex] || {};

    return (
      <div id="game-board">
        <>
          {showFinalScore ? (
            <ClassFinalScore correctCount={correctCount} />
          ) : (
            <>
              <div id="fish-container">
                {url && <img src={url} alt={name} />}
              </div>
              <form id="fish-guess-form" onSubmit={this.handleFormSubmit}>
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
}

export default ClassGameBoard;
