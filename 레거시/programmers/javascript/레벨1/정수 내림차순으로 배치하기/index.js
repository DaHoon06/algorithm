function solution(n) {
    const str = n.toString().split('').sort((a, b) => a - b).reverse();
    return parseInt(str.reduce((a,b) =>  a + b));
}

console.log(solution(118372))


// 다른 사람 풀이 1
function solution(n) {
    const newN = n + "";
    const newArr = newN
        .split("")
        .sort()
        .reverse()
        .join("");

    return +newArr;
}

// 풀이 2
function solution(n) {
    return parseInt((n+"").split("").sort().reverse().join(""));
}
