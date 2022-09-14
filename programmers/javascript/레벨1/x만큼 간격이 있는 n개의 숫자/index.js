/**
 *
 * @param x: x만큼 증가 (초기값)
 * @param n: 개수
 * @returns {*[]}
 */
function solution(x, n) {
    const answer = [];
    for (let i = 1; i <= n; i++){
        answer.push(x * i);
    }
    return answer;
}

console.log(solution(2,5)); // [2,4,6,8,10]

// 다른 사람 풀이 1
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

