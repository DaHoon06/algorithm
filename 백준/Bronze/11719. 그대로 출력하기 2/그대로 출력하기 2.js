const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
