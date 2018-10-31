import { actionTypes, startNewGame } from "../../actions";

describe("newGame", () => {
  it("has the correct type", () => {
    const action = startNewGame();
    expect(action.type).toEqual(actionTypes.NEW_GAME);
  });

  it("has the correct payload", () => {
    const action = startNewGame({ winner: "o" });
    expect(action.payload).toEqual({ winner: "o" });
  });
});
