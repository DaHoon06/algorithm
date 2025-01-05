/**
 *
 * @param s 문자열
 * @returns {number} 성공하면 1 아니면 0
 */
//TODO 앞,뒤 문자열을 확인하여 같으면 제거하고 붙이기
function solution(s) {
    const stack = [];

    for (let i = 0 ; i < s.length ; i++ ) {
        if (!stack.length || stack[stack.length-1] !== s[i]) stack.push(s[i]);
        else stack.pop();
    }

    return stack.length ? 0 : 1;
}
const str = 'baabaa';
console.log(solution(str)); // return 1;
