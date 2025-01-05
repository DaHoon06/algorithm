const fs = require("fs");
const input = fs.readFileSync("baekjoon/18108/input.txt").toString();

/**
 * @description 불기 원년(1년)은 기원전 544년
 */

function convert(year) {
  return +year - 544;
}

console.log(convert(input))