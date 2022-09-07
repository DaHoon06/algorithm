function solution(n) {
    return n.toString().split('').reverse().map((v) => parseInt(v));
}

const n = 12345;
solution(n);
