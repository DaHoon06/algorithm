function solution(n, m, section) {
    let answer = 0;
    let paint = 0; // 칠해진 영역
    // 칠해야할 영역을 확인
    section.forEach(v => {
       if (v > paint) {
           paint = v + m -1
           answer++;
       }
    })

    return answer;
}