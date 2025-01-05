/**
 *
 * @param left: 시작
 * @param right: 마지막
 * @returns {number}
 * 약수의 개수: 짝수 -> + , 홀수 -> -
 */

function solution(left, right) {
    return divisor(number(left,right));
}

function number(left,right){
    let num = [];
    for(let i = left; i <= right; i++){
        num.push(i);
    }
    return num;
}

function divisor(arr) {
    let result = 0;
    let resultCount = [];
    // 배열에 담겨있는 수의 약수를 구한다.
    // 이때, 약수의 개수가 짝수일 경우 result 변수에 해당 배열의 수를 더하고
    //      약수의 개수가 홀수일 경우 result 변수에 해당 배열의 수를 뺀다.
    for(let i = 0; i < arr.length; i++){
        let cnt = 0;
        for(let j = 1; j <= arr[i]; j++){
            if(arr[i] % j === 0){
                cnt++;
            }
        }
        resultCount.push(cnt);
        if(resultCount.pop() % 2 === 0){
            result += arr[i];
        } else {
            result -= arr[i];
        }
    }
    return result;
}


// ----- 다른 사람 풀이 -----
// 1.
function solution2(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

// 2.
function solution3(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++;
        }
        if (count % 2) answer -= i;
        else answer += i;
    }

    return answer;
}