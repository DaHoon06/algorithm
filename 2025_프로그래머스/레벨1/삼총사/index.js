const numbers = [
  [-2, 3, 0, 2, -5],
  [-3, -2, -1, 0, 1, 2, 3],
  [-1, 1, -1, 1],
];
const resultArr = [2, 5, 0];

for (let i = 0; i < 3; i++) {
  const result = solution(numbers[i]);
  console.log(`내가 작성한 함수의 결과 : ${result}`);
  console.log(`정답 : ${resultArr[i]}`);
}
/**
 * Brute Force
 * 순서 보장 : i < j < k
 * */
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
