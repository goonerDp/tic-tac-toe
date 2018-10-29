export const actionTypes = { NEW_GAME: "NEW_GAME" };

export const startNewGame = winner => {
  return {
    type: actionTypes.NEW_GAME,
    payload: winner
  };
};
