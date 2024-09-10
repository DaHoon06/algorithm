const fs = require("fs");
const input = fs.readFileSync("BackJoon/5585/input.txt").toString();

let exchange = 1000 - input;
let count = 0;

const coins = [500, 100, 50, 10, 5, 1]; // 500엔, 100엔, 50엔, 10엔, 1엔

for (let i = 0; i < coins.length; i++) {
  let rest = Math.floor(exchange / coins[i]);
  console.log(`${coins[i]} 엔 의 개수 : ${rest}, 남은 금액 : ${exchange}`);
  exchange -= rest * coins[i];
  count += rest;
}

console.log(`잔돈의 개수는 ? ${count} 개 `);


