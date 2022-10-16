function solution(s, n) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            code += n;
            if (code > 90) code -= 26;
        } else if (code >= 97 && code <= 122) {
            code += n;
            if (code > 122) code -= 26;
        }

        result += String.fromCharCode(code);
    }
    return result;
}

const s = "AB";
const n = 1;
console.log(solution(s, n));

// 다른 사람 풀이 1
// 아스키 코드를 사용하지 않은 방법
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' ';
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}

// 풀이 2

2
3
4
5
function solution(s, n) {
    var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
    return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
}

// 풀이 3
function caesar(s, n) {
    var result = s.replace(/[a-z]/ig, c => [ c = c.charCodeAt(0), String.fromCharCode((c & 96) + (c % 32 + n - 1) % 26 + 1) ][1]);

    // 함수를 완성하세요.
    return result;
}
