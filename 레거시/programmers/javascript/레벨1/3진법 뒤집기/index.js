/**
 *
 * @param n: 매개변수
 * @returns {number}
 */
function solution(n) {
    const num = n.toString(3);
    const result = num.split('').reverse().join('');
    console.log(parseInt(result,10))
    return parseInt(result,3);
}


solution(45);