
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const n = Number(input[0]);

for (let i = n; i > 0; i--) {
  console.log(i);
}