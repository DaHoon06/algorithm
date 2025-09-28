
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

function addSpace(step) {
  let message = "";
  for (let i = 0; i < Math.floor(step / 2); i++) {
    message += " ";
  }
  return message;
}
// 2×N-1
for (let i = 1; i <= +input; i++) {
  let message = "";

  const count = 2 * i - 1;
  const spaceCount = 2 * +input - count;
  message += addSpace(spaceCount);

  for (let j = 0; j < count; j++) {
    message += "*";
  }

  console.log(message);
}
