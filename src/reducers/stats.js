import { actionTypes } from "../actions";

const INITIAL_STATE = {
  sets: 0,
  x_wins: 0,
  o_wins: 0
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.NEW_GAME:
      if (action.payload === "x") {
        return { ...state, sets: ++state.sets, x_wins: ++state.x_wins };
      } else if (action.payload === "o") {
        return { ...state, sets: ++state.sets, o_wins: ++state.o_wins };
      }
      return { ...state, sets: ++state.sets };
    default:
      return state;
  }
}
