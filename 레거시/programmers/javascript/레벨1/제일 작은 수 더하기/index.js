
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if (arr.length <= 1) return [-1];
    return arr;
}

console.log(solution([4,3,2,1,])) // [4,3,2]

// 다른 사람 풀이
function solution(arr) {
    if (arr.length <= 1) return [-1];
    let min;
    arr.reduce((acc, cur) => min = cur > acc ? acc : cur);
    return arr.filter(e => e !== min);
}
