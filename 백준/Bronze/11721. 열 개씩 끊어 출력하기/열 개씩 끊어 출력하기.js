const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("");

const count = input.length;

let answer = "";

for (let i = 0; i < count; i++) {
  answer += input[i];
  if ((i + 1) % 10 === 0 && i !== 0) {
    answer += "\n";
  }
}

console.log(answer);