function solution(s) {
    const size = s.length;
    return size % 2 === 0 ? s.substr((size / 2) - 1, 2) :  s.substr(size / 2 , 1);
}

console.log(solution('abcde')); // c
// 홀수이면 가운데 글자
// 짝수이면 가운데 2글자

// 다른 사람 풀이 1.
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

// 풀이 2.
function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}

