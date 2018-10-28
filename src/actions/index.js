export const actionTypes = { TEST: "TEST" };

export const testAction = () => {
  return {
    type: actionTypes.TEST,
    payload: "test"
  };
};
