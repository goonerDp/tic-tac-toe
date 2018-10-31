import React from "react";
import { string, bool, func } from "prop-types";

const Square = ({ value, onClick, id, winner }) => {
  return (
    <button
      className={winner ? "square square--winner" : "square"}
      onClick={onClick}
      id={id}
    >
      {value}
    </button>
  );
};

Square.propTypes = {
  value: string,
  id: string,
  winner: bool,
  onClick: func.isRequired
};

export default Square;
