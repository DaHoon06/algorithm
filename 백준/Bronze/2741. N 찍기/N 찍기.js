const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  console.log(i);
}
