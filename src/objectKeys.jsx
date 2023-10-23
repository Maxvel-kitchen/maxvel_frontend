const prototype = { 0: "a", 1: "b", 2: "c" };
const object = Object.create(prototype);
object[3] = "d";

const getKeys = (obj) => {
  const proto = Object.getPrototypeOf(obj);
  return {
    objectKeys: Object.keys(obj),
    objectPrototypeKeys: Object.keys(proto),
  };
};

console.log(getKeys(object));
