/*
* 입력된 수가 짝수라면 / 2
* 홀수라면 * 3 + 1
* 결과에서 1이 나올 떄까지 반
* */
/**
 *
 * @param num
 * @returns {number} 반복된 회수
 */
// 1차 풀이 시간초과.....
function solution(num) {
    let result = num;
    let cnt = 0;
    let not = true;
    while (not) {
        result = init(result);
        cnt++;
        if (result === 1) not = false;
    }
    console.log(cnt)
    if (cnt >= 500) return -1
    else return cnt;
}

function init(num) {
    let result = 0;
    if (num % 2 === 0) {
        result = num / 2;
    } else {
        result = num * 3 + 1;
    }
    return result;
}
console.log(solution(6)) // 8

// 2차 풀이
// 단순히 num이 1이 될 때 까지만 돌려주고
function solution2(num) {
    let cnt = 0;
    while (num != 1) {
        if (num % 2 == 0)num /= 2;
        else num = (num * 3) + 1;
        cnt++;
    }

    if (cnt >= 500) return -1;
    else return cnt;
}

console.log(solution2(6))

// 다른 사람 풀이 1
function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
        answer++;
    }
    return num == 1 ? answer : -1;
}

// 풀이 2
function collatz(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}
