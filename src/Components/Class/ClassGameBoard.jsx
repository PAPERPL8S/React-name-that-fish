import React, { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuess: "",
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { userGuess } = this.state;
    const { onAnswerSubmitted } = this.props;
    const submittedAnswer = userGuess.trim().toLowerCase();
    onAnswerSubmitted(submittedAnswer);
    this.setState({ userGuess: "" });
  };

  handleInputChange = (e) => {
    this.setState({ userGuess: e.target.value });
  };

  render() {
    const { name, url } = this.props.fishInfo;
    const { userGuess } = this.state;

    return (
      <div id="game-board">
        <div id="fish-container">{url && <img src={url} alt={name} />}</div>
        <form id="fish-guess-form" onSubmit={this.handleFormSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            id="fish-guess"
            name="fish-guess"
            value={userGuess}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ClassGameBoard;
