import React, { Component } from "react";
import { func, array } from "prop-types";
import Square from "./Square";

class Board extends Component {
  static propTypes = {
    onClick: func,
    winnerLine: array
  };

  renderSquare(i) {
    const { winnerLine } = this.props;

    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        className={
          winnerLine && winnerLine.indexOf(i) !== -1 && "winner-square"
        }
      />
    );
  }
  render() {
    return (
      <div className="board">
        <div className="board__row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board__row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board__row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
