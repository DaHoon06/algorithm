function charCount(str) {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();

        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
}
// 첫번째 리팩토링 : 성능보단 코드 위주
function charCountRefectoring1(str) {
    const obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
}

// 두번째 리팩토링 : 정규식 표현을 사용하였지만 성능이 좋지 않아 다시 리팩토링
function charCountRefectoring2(char) {
    const code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false;
    }
    return true;
}