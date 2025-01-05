function solution(s) {
    let answer = '';
    const str = s.split(' ');
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[i].length; j++) {
            if (j % 2 === 0) answer += str[i][j].toUpperCase();
            else answer += str[i][j].toLowerCase();
        }
        if (i < str.length - 1) answer += ' ';
    }
    return answer;
}

console.log(solution('try hello world'));

// 다른 사람 풀이 1
function toWeirdCase(s){
    //함수를 완성해주세요
    return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

}
