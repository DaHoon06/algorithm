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