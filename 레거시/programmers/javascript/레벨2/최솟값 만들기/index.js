// 1차 시간 초과.....
function solution(A,B){
    let answer = 0;
    const size = A.length;
    for (let i = 0; i < A.length; i++) {
        const min = Math.min(...A);
        const max = Math.max(...B);
        answer += min * max;
        A.splice(A.findIndex((v) => v === min), 1);
        B.splice(B.findIndex((vv) => vv === max), 1);
        i--;
    }
    return answer;
}

function solution2(A,B) {
    const b = B.sort((a, b) => b - a);
    return A.sort((a, b) => a - b).reduce((acc, cur, index) => acc += cur * b[index], 0);
}

const A = [1,4,2];
const B = [5,4,4];
console.log(solution2(A,B))

console.log(solution(A,B)); // 29

// console.log(solution([1,2], [3,4])); // 10
