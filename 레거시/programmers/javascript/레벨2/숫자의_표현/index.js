/**@link https://school.programmers.co.kr/learn/courses/30/lessons/12924?language=javascript */
function solution() {
  // 연속된 자연수

  let count = 0;
  // 자연수 1
  // 1 부터 순차적으로 사이즈를 늘려가면서 모든 경우의 수를 찾는 문제
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        count++;
        break; //
      } else if (sum > n) {
        break; 
      }
    }
  }
  return count;
}

const n = 15; // 4
const result = solution(n);
console.log(result); // expects 4
/**
 * Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 이용한 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현할 수 있습니다.

1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15
  자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return 하는 solution를 완성해주세요.

 

  제한사항

n은 10,000 이하의 자연수 입니다.
 */
