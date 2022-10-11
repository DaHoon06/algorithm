function solution(s){
    const size = s.length;
    let stackCount = 0;
    for (let i = 0; i < size; i++) {
        stackCount += s[i] === '(' ? 1 : -1;
        if (stackCount < 0) return false;
    }
    return stackCount === 0;
}

console.log(solution('()()')) // true;
