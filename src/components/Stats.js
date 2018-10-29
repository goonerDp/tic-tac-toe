import React from "react";
import { number, shape } from "prop-types";

const Stats = ({ stats: { sets, x_wins, o_wins } }) => {
  return (
    <div className="stats">
      <div>
        Sets played: <span className="stats__num">{sets}</span>
      </div>
      <div>
        Player 1 wins:{" "}
        <span className="stats__num stats__num--x">{x_wins}</span>
      </div>
      <div>
        Player 2 wins:{" "}
        <span className="stats__num stats__num--0">{o_wins}</span>
      </div>
    </div>
  );
};

Stats.propTypes = {
  stats: shape({
    sets: number,
    x_wins: number,
    o_wins: number
  })
};

export default Stats;
