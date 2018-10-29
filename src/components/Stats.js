import React from "react";
import { number, shape } from "prop-types";

const Stats = ({ stats: { sets, x_wins, o_wins } }) => {
  return (
    <div className="stats">
      <div>Sets played: {sets}</div>
      <div>Player 1 wins: {x_wins}</div>
      <div>Player 2 wins: {o_wins}</div>
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
