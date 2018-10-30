import React, { Component } from "react";
import { func } from "prop-types";
import Square from "./Square";

class Board extends Component {
  static propTypes = {
    onClick: func
  };

  renderSquare(i) {
    return (
      <Square
        id={"test-id" + i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
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
