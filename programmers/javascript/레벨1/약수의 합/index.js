
//*TODO: n의 약수를 모두 더한 값을 리턴
function solution(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) result += i;
    }
    return result;
}

const n = 12; // => return 28
solution(n);