function solution(price, money, count) {
    let total = 0;
    for (let i = 1; i <= count; i++) {
        total += price * i;
    }
    return money > total ? 0 : total - money
}

const price = 3;
const money = 20;
const count = 4;
const test = solution(price,money,count); // result = 10
console.log(test)