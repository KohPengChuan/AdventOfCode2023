const fs = require("fs");
const inputs = fs.readFileSync("./day01_1.txt", "utf-8").split(/\r?\n/);

const filterNumbersOnly = (text) => text.split("").filter(char => char.match(/\d/)).join("");

const numberInputs = inputs.map(input => filterNumbersOnly(input));

const sum = numberInputs.reduce((acc, curr) => {
  if (!curr?.length) return acc;
  return acc + parseInt(`${curr[0]}${curr[curr.length - 1]}`);
}, 0);

console.log(sum);
