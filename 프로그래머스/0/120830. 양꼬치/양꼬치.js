function solution(n, k) {
    const count = k - Math.floor(n / 10);
    return n * 12000 + count * 2000
}