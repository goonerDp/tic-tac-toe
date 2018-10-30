import React from "react";
import { string, func } from "prop-types";

const Square = ({ value, onClick, id, className }) => {
  return (
    <button
      className={["square", className].join(" ")}
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
  onClick: func
};

export default Square;
