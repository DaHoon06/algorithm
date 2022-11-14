/**
 *
 * @param k: 사과 최대 점수
 * @param m: 한 상자에 들어가는 사과의 수
 * @param score: 사과들의 점수 배열
 * @returns {number}
 */
function solution(k, m, score) {
    const size = score.length;
    const boxCount = Math.floor(size / m);

    let result = 0;
    let index = m - 1;

    score.sort((a, b) => b - a);

    for (let i = 0; i < boxCount;  i++) {
        result += score[index] * m;
        index += m;
    }
    return result;
}

const k = 3;
const m = 4;
const score = [1,2,3,1,2,3,1]

//console.log(solution(k, m, score)) /// return 8;
console.log(solution(4,3,[4,1,2,2,4,4,4,4,1,2,4,2])) // return 33
