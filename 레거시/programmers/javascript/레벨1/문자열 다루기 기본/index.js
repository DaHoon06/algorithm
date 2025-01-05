
//*TODO: 문자열 s의 길이가 4 or 6 또는 숫자로만 구성 되어있는지
function solution(s) {
    return (s.length === 4 || s.length === 6) && s == parseInt(s);
}

const s = '  ';
solution(s);