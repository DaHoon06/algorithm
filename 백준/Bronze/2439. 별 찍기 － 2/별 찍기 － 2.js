const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

for (let i = 1; i <= +input; i++) {
  let message = "";

  for (m = 0; m < +input - i; m++) {
    message += " ";
  }

  for (j = i; j > 0; j--) {
    message += "*";
  }
  console.log(message);
}
