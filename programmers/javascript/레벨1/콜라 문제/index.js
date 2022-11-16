/**
 *
 * @param a: 갖다줘야할 콜라 빈 병
 * @param b: 가게에서 주는 콜라
 * @param n: 현재 가지고 있는 빈 병
 * @returns {number}
 */
function solution(a, b, n) {
    let answer = 0;
    // 교환할 콜라가 업을 때 까지 돌림
    while (n >= a) {
        // 교환 받은 콜라 수
        answer += Math.floor(n / a) * b;
        // 남은 빈 병
        n = Math.floor(n / a) * b + (n % a);
    }
    return answer;
}

console.log(solution(3,1,20)) // return 9


// 다른 풀이 1
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b
