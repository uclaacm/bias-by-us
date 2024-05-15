const percentages = [
  10.0, 12.0, 15.0, 14.0, 16.0, 19.0, 18.0, 20.8, 19.0, 20.0, 21.0, 19.0, 20.7,
  21.2, 23.7, 23.6,
];

const numEnroll = [
  195, 247, 279, 248, 342, 369, 409, 360, 406, 395, 461, 431, 426, 455, 469,
  472, 497,
];
let year = 1988;
const data = percentages.map((p) => {
  year += 2; // years will range from 1990 to 2018
  return {
    name: year,
    "percent of women enrolled": p,
  };
});

export default data;
