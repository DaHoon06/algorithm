const fs = require("fs");
const input = fs.readFileSync("baekjoon/10430/input.txt").toString().split(' ');

/**
 * @descipion 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
 */

const A = +input[0];
const B = +input[1];
const C = +input[2];


console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);