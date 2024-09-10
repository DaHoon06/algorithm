/**
 * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const input = fs
  .readFileSync("BackJoon/2750/input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
