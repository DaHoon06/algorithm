function solution(seoul) {
    let answer = '';
    seoul.forEach((name, index) => {
        if (name === 'Kim') {
            answer = `김서방은 ${index}에 있다`;
        }
    });
    return answer;
}

console.log(solution(['Jane','Kim']));

// 다른 사람 풀이 1.
function findKim(seoul){
    var idx = seoul.indexOf('Kim');
    return "김서방은 " + idx + "에 있다";
}

// 풀이 2
function findKim(seoul) {
    return "김서방은 " + seoul.indexOf('Kim') + "에 있다";
}
