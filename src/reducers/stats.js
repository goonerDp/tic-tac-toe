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
        console.log(state);
        return { ...state, sets: ++state.sets, x_wins: ++state.x_wins };
      }
      return { ...state, sets: ++state.sets, o_wins: ++state.o_wins };
    default:
      return state;
  }
}
