/**
 *
 * @param d
 * @param budget
 * @returns { number }
 */
// 1차 시도 - 테스트 코드 중 절반만 통과....
function solution1(d, budget) {
    let total = 0;
    for(let i of d) {
        budget = budget - i;
        if(budget >= 0) total++;
    }
    return total;
}
// 정렬을 줬더니 4개 정도의 테스트 케이스를 통과한거 보니 시간 문제인듯..
// sort 함수에 대해 이해도가 떨어진듯..
function solution(d, budget) {
    let total = 0;
    d.sort((a,b) => a - b);
    for(let i of d) {
        budget = budget - i;
        if (budget >= 0) total++;
    }
    return total;
}

const d = [1,3,2,5,4];
const budget = 9;

solution(d,budget)