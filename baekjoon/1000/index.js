const fs = require("fs");
const input = fs.readFileSync("baekjoon/1000/input.txt").toString().split(" ");

console.log(parseInt(input[0]) + parseInt(+input[1]));
