import React from "react";
import { string, func } from "prop-types";

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

Square.propTypes = {
  value: string,
  onClick: func
};

export default Square;
