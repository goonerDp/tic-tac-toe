import { actionTypes } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case actionTypes.TEST:
      return [...state, action.payload];
    default:
      return state;
  }
}
