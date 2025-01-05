function solution(s){
    const upperCase = s.toUpperCase();
    const arr = upperCase.split('');
    let cnt1 = 0;
    let cnt2 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'P') {
            cnt1++;
        }
        if (arr[i] === 'Y') {
            cnt2++;
        }
    }
    if (cnt1 === cnt2) return true;
    else return !cnt1 && !cnt2;
}

console.log(solution('PpoooyY')); // true

// 다른 사람 풀이 1
function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

// 풀이2
function numPY(s) {
    return s.match(/p/ig).length == s.match(/y/ig).length;
}
