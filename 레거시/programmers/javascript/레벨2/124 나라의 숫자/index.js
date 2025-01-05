// 124 나라
function solution(n) {
    //1 4 7 0
    // 1 4 7    11 14 17    21 24 27    41 44 47 111
    let result = '';
    // 나머지값 : 0  1  2
    const arr = [4, 1, 2];

    while (n) {
        result = arr[n % 3] + result; // 14
        // 1
        n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
    }
    return result;
}

// n -> 10진법
const n = 6; // 14
solution(n);

// 타 코드
function solution2(n) {
    return n === 0 ? '' : solution2(parseInt((n - 1) / 3)) + [1,2,4][(n - 1) % 3];
}