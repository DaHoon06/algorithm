function solution(numbers) {
    var answer = 0;
    
    const len = numbers.length;
    for (let i = 0; i < len; i++) {
        answer += numbers[i];
    }
    answer = answer / len;
    return answer.toFixed(1);
}