const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");


const count = parseInt(input[0]);

for (let i = 1; i <= count; i++) {
  const [a, b] = input[i].split(" ");
  console.log(+a + +b);
}