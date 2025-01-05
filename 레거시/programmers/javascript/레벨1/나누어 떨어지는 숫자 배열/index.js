function solution(arr, divisor) {
    const filter = arr.filter((num) => num % divisor === 0);
    if (filter.length < 1) return [-1];
    return filter.sort((a,b) => a - b);
}

const arr = [2,36,1,3,];
const divisor = 1;

console.log(solution(arr, divisor)); // [5, 10];

// 다른 사람 풀이 1.
// 삼항연산자 활용

function solution(arr, divisor) {
    var answer = arr.filter(v => v % divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}
