function solution(a, b) {
    const size = Math.abs(a - b);
    let answer = 0;
    let startNumber = 0;

    if (a > b) startNumber = b;
    else startNumber = a;

    for (let i = startNumber; i <= startNumber + size; i++) {
        answer += i;
    }

    return answer;
}

console.log(solution(3,5)) // 12


// 다른 사람 풀이 1
// 가우스???
function adder(a, b){
    return (a+b)*(Math.abs(b-a)+1)/2;
}

// 다른 사람 풀이 2
// Max가 있었구나....
function adder(a, b, s = 0){
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    return s;
}
