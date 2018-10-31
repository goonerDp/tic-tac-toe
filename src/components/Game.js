import React, { Component, Fragment } from "react";
import Board from "./Board";
import Stats from "./Stats";
import SetStatus from "./SetStatus";
import SetNav from "./SetNav";
import { connect } from "react-redux";
import { calcWinner } from "../utils";
import { startNewGame } from "../actions";

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
    const { history, stepNumber, xIsNext } = this.state;
    const current = history[stepNumber];
    const winner = calcWinner(current.squares, true);
    let winnerLine;
    if (winner) {
      winnerLine = winner.line;
    }
    return (
      <Fragment>
        <SetNav
          stepNumber={stepNumber}
          history={history}
          goBack={this.goBack}
          goForward={this.goForward}
        />
        <SetStatus
          winner={winner}
          xIsNext={xIsNext}
          stepNumber={stepNumber}
          startNewGame={this.startNewGame}
        />
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
