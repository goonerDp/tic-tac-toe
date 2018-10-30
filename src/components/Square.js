import React from "react";
import { string, func } from "prop-types";

const Square = ({ value, onClick, id }) => {
  return (
    <button className="square" onClick={onClick} id={id}>
      {value}
    </button>
  );
};

Square.propTypes = {
  value: string,
  id: string,
  onClick: func
};

export default Square;
