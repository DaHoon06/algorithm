function solution(number, n, m) { // 60 2 3 return 1
    const check = number % n === 0 && number % m === 0;
    if (check) return 1;
    else return 0;
}