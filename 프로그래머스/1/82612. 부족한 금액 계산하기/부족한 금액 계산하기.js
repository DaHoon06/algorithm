function solution(price, money, count) {
    let total = 0;
    
    for (let i = 1; i <= count; i++) {
        total += +price * i;
    }
    const returnVal = +money - +total;
    return returnVal > 0 ? 0 : -returnVal
}