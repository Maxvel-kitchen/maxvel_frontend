const object = { 0: "a", 1: "b", 2: "c" };

for (const [key, value] of Object.entries(object)) {
  console.log({ key: key, value: value });
}
