const fs = require("fs");
const input = fs.readFileSync("BackJoon/2747/input.txt").toString().split(" ");

const size = +input[0];


/** @description Fn = Fn-1 + Fn-2 (n ≥ 2) */

// 시간 초과
function fibonachi(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fibonachi(num - 1) + fibonachi(num - 2);
}

// 아래 메모이제이션 활용
const memo = [0, 1, 1]; // 3 4 5

const fibo = (num) => {
    if (memo[num]) return memo[num];
    memo[num] = fibo(num - 1) + fibo(num - 2); 
    return memo[num];
};