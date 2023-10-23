const obj1 = { x: 5, y: 42 };
const obj2 = {};
const array = [null, false, 0];

const checkIfEmpty = (input) => {
  let result;
  if (Object.keys(input).length === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

console.log(checkIfEmpty(obj1));
console.log(checkIfEmpty(obj2));
console.log(checkIfEmpty(array));
