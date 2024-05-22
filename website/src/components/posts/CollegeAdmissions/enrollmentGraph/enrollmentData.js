const numbers = [
  195, 247, 279, 248, 342, 369, 409, 360, 406, 395, 461, 431, 426, 455, 469,
  472, 497,
];
let year = 1988;
const data = numbers.map((m) => {
  year += 2;
  return {
    name: year,
    "women enrolled": m,
  };
});

export default data;
