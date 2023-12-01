const fs = require("fs");
const inputs = fs.readFileSync("./day01_1.txt", "utf-8").split(/\r?\n/);

const NUM_TEXT = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const filterNumbersOnly = (text) => text.split("").filter(char => char.match(/\d/)).join("");

const findTextMatch = (text, index) => {
  for (let n = 0; n < NUM_TEXT.length; n++) {
    const end = index + NUM_TEXT[n].length;
    if (text.substring(index, end) === NUM_TEXT[n]) {
      return `${text.substring(0, index)}${n}${text.substring(end - 1)}`;
    }
  }
  return text;
}

const findNumMatch = (text)  => {
  let newtext = text.toLowerCase();
  let index = 0;
  while (index < newtext.length) {
    newtext = findTextMatch(newtext, index);
    index ++;
  }
  return newtext;
}

const numberInputs = inputs.map(input => {
  return filterNumbersOnly(findNumMatch(input));
});

const sum = numberInputs.reduce((acc, curr) => {
  if (!curr?.length) return acc;
  const num = parseInt(`${curr[0]}${curr[curr.length - 1]}`);
  return acc + num;
}, 0);

console.log(sum);
