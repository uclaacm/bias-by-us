const percentages = [15, 13, 19, 30, 37, 30, 28, 28, 23, 18, 18, 20];
let year = 1960;
const data = percentages.map((p) => {
  year += 5; // years will range from 1965 to 2020
  return {
    name: year,
    percentage: p,
  };
});

export default data;
