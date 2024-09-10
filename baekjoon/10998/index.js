const fs = require("fs");
const input = fs.readFileSync("baekjoon/10998/input.txt").toString().split(" ");

console.log(parseInt(input[0]) * parseInt(+input[1]));
