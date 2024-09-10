const fs = require("fs");

const singleInput = fs.readFileSync('/dev/stdin').toString().split(' '); // 한 줄 입력 받을 때
const multipleInput = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 여러 줄 입력 받을 때
