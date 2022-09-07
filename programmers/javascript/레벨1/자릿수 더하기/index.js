function solution(n) {
    return n.toString().split("").map((v) => parseInt(v)).reduce((a,b) => a + b);
}
