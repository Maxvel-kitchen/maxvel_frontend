/* eslint-disable default-param-last */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "SET":
      return (state = action.payload);
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

export default counterReducer;
