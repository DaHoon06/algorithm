const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();
const inputs = input.split("\n");

let stack = [];

// 실행 횟수
const execCount = +inputs[0];
const result = [];

for (let i = 1; i <= execCount; i++) {
  const [cmd, value] = inputs[i].split(" ");

  switch (cmd) {
    case "push":
      stack.push(value);
      break;
    case "pop":
      result.push(stack.length ? stack.pop() : -1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack.length ? 0 : 1);
      break;
    case "top":
      result.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}

console.log(result.join("\n"));
