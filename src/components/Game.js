import React, { Component, Fragment } from "react";
import Board from "./Board";
import { connect } from "react-redux";
import { startNewGame } from "../actions";
import Stats from "./Stats";
import { calcWinner } from "../utils";

export const INITIAL_GAME_STATE = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  xIsNext: true,
  stepNumber: 0
};

class Game extends Component {
  state = INITIAL_GAME_STATE;

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

    if (calcWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "x" : "o";

    this.setState({
      history: history.concat([{ squares: squares }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }

  startNewGame = winner => () => {
    this.props.startNewGame(winner);
    this.setState(INITIAL_GAME_STATE);
  };

  render() {
    const { stats } = this.props;
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const stepNumber = this.state.stepNumber;
    const winner = calcWinner(current.squares, true);
    let status, winnerLine;

    if (winner) {
      status = "Winner: " + winner.winner;
      winnerLine = winner.line;
      console.log(winner);
    } else if (stepNumber === 9) {
      status = "It's a draw!";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "x" : "o");
    }

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

        <div className="set-status">
          {status}
          {(winner || stepNumber === 9) && (
            <button
              onClick={this.startNewGame(winner)}
              className="btn--new-game"
            >
              New game
            </button>
          )}
        </div>
        <Board
          squares={current.squares}
          onClick={i => this.handleClick(i)}
          winnerLine={winnerLine}
        />

        <Stats stats={stats} />
      </Fragment>
    );
  }
}

export default connect(
  state => {
    return {
      stats: state.stats
    };
  },
  { startNewGame }
)(Game);
