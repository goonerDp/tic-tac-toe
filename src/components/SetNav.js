import React from "react";
import { func, number, array } from "prop-types";

const SetNav = ({ stepNumber, history, goBack, goForward }) => {
  return (
    <div className="history-nav">
      <button
        className={
          stepNumber > 0 ? "history-nav__btn active" : "history-nav__btn"
        }
        onClick={goBack}
      >
        &larr; Step Back
      </button>
      <button
        className={
          stepNumber < history.length - 1
            ? "history-nav__btn active"
            : "history-nav__btn"
        }
        onClick={goForward}
      >
        Step Forward &rarr;
      </button>
    </div>
  );
};

SetNav.propTypes = {
  stepNumber: number.isRequired,
  history: array.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired
};

export default SetNav;
