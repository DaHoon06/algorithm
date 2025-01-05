function solution(n) {
    let answer = '';
    for(let i = 0; i < n; i++) {
        if (i % 2 === 0) answer += '수';
        else answer += '박'
    }
    return answer.trim();
}

console.log(solution(4))

// 다른 사람 풀이 1
const waterMelon = n => {
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}

// 풀이2
const waterMelon = n => "수박".repeat(n).slice(0,n);
