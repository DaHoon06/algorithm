const t = ["3141592", "500220839878", "10203"];
const p = ["271", "7", "15"];
const resultArr = [2, 8, 3];

for (let i = 0; i < 3; i++) {
  const result = solution2(t[i], p[i]);
  console.log(`내가 작성한 함수의 결과 : ${result}`);
  console.log(`정답 : ${resultArr[i]}`);
}

function solution(t, p) {
  let count = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    const value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}

function solution2(t, p) {
  var answer = 0;

  for (i = 0; i < t.length - p.length + 1; i++) {
    if (t.substr(i, p.length) <= p) {
      console.log(i);
      answer++;
    }
  }

  return answer;
}

/**
 * 채점 결과
 * 정확성: 15.8
 * 합계: 15.8 / 100.0
 * 
 * .. 문제를 잘못이해했구나...잘못 잘랐네
 */
function solution2(t, p) {
  const pLen = p.length;
  const tSplit = t.split("");
  const arr = [];

  let answer = 0;
  let str = "";

  for (let i = 0; i < tSplit.length; i++) {
    str += tSplit[i];
    if (i % pLen === 0) {
      arr.push(str);
      str = "";
    }
  }

  for (const value of arr) {
    if (Number(value) <= Number(p)) answer++;
  }

  return answer;
}
