function solution(s) {
    const str = s.split(' ');
    const num = str.map((str) => parseInt(str));
    num.sort((a,b) => a - b);

    const max = num[num.length - 1].toString();
    const min = num[0].toString();
    return min.concat(' ').concat(max);
}

console.log(solution("-1 -2 -3 -4")); // "-4 -1"

//다른 사람 풀이 1.
function solution(s) {
    const arr = s.split(' ');

    return Math.min(...arr)+' '+Math.max(...arr);
}
