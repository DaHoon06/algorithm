function solution(number) {
  var answer = 0;
  const total = number.length;

  for (let i = 0; i < total - 2; i++) {
    for (let j = i + 1; j < total - 1; j++) {
      for (let k = j + 1; k < total; k++) {
        if (number[i] + number[j] + number[k] === 0) answer++;
      }
    }
  }
  return answer;
}