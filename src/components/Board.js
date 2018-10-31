import React, { Component } from "react";
import { func, array, arrayOf, string } from "prop-types";
import Square from "./Square";

class Board extends Component {
  static propTypes = {
    winnerLine: array,
    squares: arrayOf(string).isRequired,
    onClick: func.isRequired
  };

  renderSquare(i) {
    const { winnerLine, squares, onClick } = this.props;
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
        winner={winnerLine && winnerLine.indexOf(i) !== -1}
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
