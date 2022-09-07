//  n 144 -> 12, 안되면 -1
// sqrt => 제곱근을 반환
// pow => pow(base, exponent) base에 exponent를 제곱
// 제곱근을 구한 후 sqrt + 1 의 제곱을 반환
function solution(n) {
    const sqrt = Math.sqrt(n);
    if (sqrt % 1 !== 0) return -1;
    else return Math.pow(sqrt+1, 2);
}

console.log(solution(121));
console.log(solution(3));
