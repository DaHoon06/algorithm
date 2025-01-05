const fs = require("fs");
const input = fs.readFileSync("BackJoon/1904/input.txt").toString().split(" ");

input = Number(input);

// 10
const memo = new Array(input).fill(0);

// N=1일 때 1
memo[1] = 1;
// N=2일 때는 00, 11
memo[2] = 2;
// N=3일 때는 i -1 + i - 2
memo[3] = 3;

for (let i = 4; i <= memo.length; i++) {
  memo[i] = (memo[i - 1] + memo[i - 2]) % 15746;
}

console.log(memo[input]);