const fs = require("fs");
const file = fs.readFileSync("./day02_1.txt", "utf-8").split(/\r?\n/);

const findMaxRGBPerHand = (hands) => {
  return hands.map(hand => {
    const cubes = {
      r: 0,
      g: 0,
      b: 0
    };
    hand.split(", ").forEach(cube => {
      const [count, color] = cube.split(" ");
      switch (color.toLowerCase()) {
        case "red": cubes.r = Math.max(cubes.r, count); break;
        case "green": cubes.g = Math.max(cubes.g, count); break;
        case "blue": cubes.b = Math.max(cubes.b, count); break;
      }
    });
    return cubes;
  });
}

const parseGame = (lines) => {
  return lines.map(line => {
    const hands = line.split(": ")[1].split("; ");
    const maxHands = findMaxRGBPerHand(hands);
    return maxHands.reduce((acc, max) => {
      const newacc = { ...acc };
      newacc.r = Math.max(newacc.r, max.r);
      newacc.g = Math.max(newacc.g, max.g);
      newacc.b = Math.max(newacc.b, max.b);
      return newacc;
    }, { ...maxHands[0] });
  });
}

const possibleGames = (data, r, g, b) => {
  return data.reduce((acc, curr, index) => {
    if (curr.r <= r && curr.g <= g && curr.b <= b) {
      return [...acc, index + 1];
    }
    return acc;
  }, []);
}

const possible = possibleGames(parseGame(file), 12, 13, 14);
const sum = possible.reduce((acc, curr) => acc + curr, 0);
console.log(possible, sum);

