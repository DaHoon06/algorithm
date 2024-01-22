const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const size = +input[0];


const memo = [0, 1, 1];

const fibo = (num) => {
    if (memo[num]) return memo[num];
    memo[num] = fibo(num - 1) + fibo(num - 2);
    return memo[num];
};

console.log(fibo(size));