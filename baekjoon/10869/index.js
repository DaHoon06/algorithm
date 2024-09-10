const fs = require("fs");
const input = fs.readFileSync("baekjoon/10869/input.txt").toString().split(" ");

/**
 * @description 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 
 * 
 * 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
 */

const first = parseInt(input[0]);
const second = parseInt(input[1]);

console.log(first + second);
console.log(first - second);
console.log(first * second);
console.log(Math.floor(first / second));
console.log(first % second);