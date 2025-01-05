function prepare(answer, expectedResult) {
  return expectedResult === solution(answer);
}

function solution(s) {
  //todo s에서 0을 제거한다.
  let result = 0;
  const originLength = s.length;
  const replaceZero = s.replaceAll("0", "");
  const length = replaceZero;
  if (length < originLength) result++;

  var answer = [];
  return answer;
}

function solution2(s) {
  let answer = [0, 0];
  let sLen = 0;

  while (s.length > 1) {
    sLen = s.length;
    s = s.replace(/0/g, "");

    answer[0]++;
    answer[1] += sLen - s.length;
    s = s.length.toString(2);
  }

  return answer;
}

const answer1 = "110010101001";
const result1 = [3, 8];

if (prepare(answer1, result1)) {
  console.log(result1);
}

console.log(solution2(answer1));
