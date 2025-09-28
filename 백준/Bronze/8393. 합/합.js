const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

let sum = 0;

for (let i = 1; i <= +input; i++) {
  sum += i;
}

console.log(sum);