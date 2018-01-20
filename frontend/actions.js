export const DO_SOMETHING = "DO_SOMETHING";
export const doSomething = (payload) => {
  return {
    type: "DO_SOMETHING",
    payload
  };
};
