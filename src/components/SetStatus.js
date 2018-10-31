import React from "react";
import { func, number, bool, string, object, oneOfType } from "prop-types";

const SetStatus = ({ winner, stepNumber, xIsNext, startNewGame }) => {
  let status, winnerLine;

  if (winner) {
    status = "Winner: " + winner.winner;
    winnerLine = winner.line;
  } else if (stepNumber === 9) {
    status = "It's a draw!";
  } else {
    status = "Next player: " + (xIsNext ? "x" : "o");
  }

  return (
    <div className="set-status">
      {status}
      {(winner || stepNumber === 9) && (
        <button onClick={startNewGame(winner)} className="btn--new-game">
          New game
        </button>
      )}
    </div>
  );
};

SetStatus.propTypes = {
  winner: oneOfType([string, object]),
  stepNumber: number,
  xIsNext: bool,
  startNewGame: func
};

export default SetStatus;
