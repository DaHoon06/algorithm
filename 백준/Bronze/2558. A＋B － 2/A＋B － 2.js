const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

console.log(parseInt(input[0]) + parseInt(+input[1]));
