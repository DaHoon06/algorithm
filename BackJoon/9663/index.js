const fs = require("fs");
const input = fs.readFileSync("BackJoon/9663/input.txt").toString();

const number = Number(input);
const queens = [];
let count = 0;

function possible(x, y) {
  for (const [a,b] of queens) {
    if (a === x || b === y) return false;
    if (Math.abs(a - y) === Math.abs(b - y)) return false;
  }
  return true;
}

function dfs(row) {
  if (row === number) {
    count++;
    return;
  }

  for (let i = 0; i < number; i++) {
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}

dfs(0);

/**
 * @description 퀸을 놓을 수 있는 위치는?
 * A 퀸이 존재한다면 A퀸의 행과 열, 그리고 대각선 위치가 아닌 곳에 퀸을 놓을 수 있다.
 * N 개의 퀸을 놓기 위해서는 각 행마다 퀸 1 개씩 놓아야 퀸을 놓을 수 있다.
 */

console.log(count);


