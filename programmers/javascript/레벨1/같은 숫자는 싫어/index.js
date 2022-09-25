function solution(arr) {
    return arr.filter((value, index) => value !== arr[index+1]);
}

console.log(solution([1,1,2,2,0,1,1]))
