import statsReducer, { INITIAL_STATE } from "../stats";
import { actionTypes } from "../../actions";

it("handles actions of type NEW_GAME", () => {
  const action = {
    type: actionTypes.NEW_GAME,
    payload: { winner: "x" }
  };

  const newState = statsReducer(INITIAL_STATE, action);

  expect(newState).toEqual({ sets: 1, o_wins: 0, draws: 0, x_wins: 1 });

  const action2 = {
    type: actionTypes.NEW_GAME,
    payload: { winner: "o" }
  };

  const newState2 = statsReducer(INITIAL_STATE, action2);

  expect(newState2).toEqual({ sets: 2, o_wins: 1, draws: 0, x_wins: 1 });

  const action3 = {
    type: actionTypes.NEW_GAME,
    payload: null
  };

  const newState3 = statsReducer(INITIAL_STATE, action3);
  expect(newState3).toEqual({ sets: 3, o_wins: 1, draws: 1, x_wins: 1 });
});

it("handles actions with unknow type", () => {
  const newState = statsReducer(
    {
      sets: 0,
      x_wins: 0,
      o_wins: 0,
      draws: 0
    },
    { type: "FFSD_FF_FETCH" }
  );
  expect(newState).toEqual({ sets: 0, o_wins: 0, draws: 0, x_wins: 0 });
});
