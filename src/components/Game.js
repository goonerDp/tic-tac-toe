import React, { Component, Fragment } from "react";
import Board from "./Board";

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    xIsNext: true,
    stepNumber: 0
  };

  goBack = () => {
    const step = this.state.stepNumber;
    if (step > 0) {
      this.setState({
        stepNumber: step - 1,
        xIsNext: !this.state.xIsNext
      });
    }
  };

  goForward = () => {
    const step = this.state.stepNumber;
    const history = this.state.history;
    if (step < history.length - 1) {
      this.setState({
        stepNumber: step + 1,
        xIsNext: !this.state.xIsNext
      });
    }
  };

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calcWinner(squares) || squares[i]) return;

    squares[i] = this.state.xIsNext ? "x" : "o";

    this.setState({
      history: history.concat([{ squares: squares }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    return (
      <Fragment>
        <div className="history-nav">
          <button className="history-nav__btn" onClick={this.goBack}>
            &larr; Step Back
          </button>
          <button className="history-nav__btn" onClick={this.goForward}>
            Step Forward &rarr;
          </button>
        </div>
        <Board squares={current.squares} onClick={i => this.handleClick(i)} />
      </Fragment>
    );
  }
}

function calcWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log("winner is:", squares[i]);
      return squares[a];
    }
  }
  return null;
}
export default Game;
