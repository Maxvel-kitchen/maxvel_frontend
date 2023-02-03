/* eslint-disable arrow-body-style */
export const increment = (payload) => {
  return {
    type: "INCREMENT",
    payload,
  };
};

export const decrement = (payload) => {
  return {
    type: "DECREMENT",
    payload,
  };
};

export const set = (inputNumber) => {
  return {
    type: "SET",
    inputNumber,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
