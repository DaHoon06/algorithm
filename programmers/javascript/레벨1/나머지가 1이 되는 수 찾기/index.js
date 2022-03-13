function solution(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 1) arr.push(i);
    }
    arr.sort((a,b) => a - b);
    return arr[0];
}

const n = 10;
solution(n); // result = 3

//TODO: 다른 사람 풀이
function solution1(n, x = 1) {
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }
}

const solution2 = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 1) {
            return i;
        }
    }
};