const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const list = input[1].split(" ").sort((a, b) => a - b);
const min = list[0];
const max = list[list.length - 1];
const message = `${min} ${max}`;

console.log(message);