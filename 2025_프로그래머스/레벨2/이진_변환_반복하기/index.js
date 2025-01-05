function prepare(answer, expectedResult) {
  return expectedResult === solution(answer);
}

function solution(s) {
  let answer = [0, 0];

  while (s.length > 1) {
    const sLength = s.length;
    const removeZeroText = s.replace(/0/g, "");
    answer[0]++;
    answer[1] += sLength - removeZeroText.length; // 제거 된 0의 개수만큼 더하기

    s = removeZeroText.length.toString(2); // 2진법으로 변환
  }

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

function solution3(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}

const answer1 = "110010101001";
const result1 = [3, 8];

console.log(solution(answer1));
