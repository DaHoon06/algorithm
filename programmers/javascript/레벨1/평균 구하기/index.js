function solution(arr) {
    return arr.map((v) => v).reduce((a,b) => a +b) / arr.length;
}

const arr = [1,2,3,4,5];
console.log(solution(arr));
