const fs = require("fs");
const singleInput = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(parseInt(singleInput[0]) - parseInt(singleInput[1]));
