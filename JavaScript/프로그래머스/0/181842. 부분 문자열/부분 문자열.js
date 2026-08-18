function solution(str1, str2) {
    const regex = new RegExp(str1, 'g');

    return !regex.test(str2) ? 0 : 1
}