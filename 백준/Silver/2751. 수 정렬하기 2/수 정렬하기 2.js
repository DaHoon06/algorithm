const fs = require("fs");
const multipleInput = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

multipleInput.shift();

multipleInput.sort((a, b) => a - b);

console.log(multipleInput.join('\n'));
