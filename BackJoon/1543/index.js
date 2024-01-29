/**
 * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "BackJoon/1543/input3.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const target = input[0].trim();
const cursor = input[1].trim();

const result = (target, cursor) => {
  let count = 0;
  while (target.includes(cursor)) {
    target = target.substr(cursor.length);
    if (target) count++;
  }
  return count;
};

console.log(result(target, cursor));

/**
 * @description 1
 */
/* 문서 검색 */
let doc = input.shift();
const search = input.shift();

function solution(doc, search) {
  let cnt = 0;
  let idx = 0;

  while(idx >= 0) {
    // doc에서 search가 처음 등장하는 인덱스 추출
    idx = doc.indexOf(search);  
    // doc에 search가 있다면,
    if(idx >= 0) {
      // search의 뒤부터 끝까지 잘라줌
      // 다시말하면, doc에서 찾은 search는 뺀 문자열로 다시 치환
      doc = doc.slice(idx + search.length, doc.length);
      cnt++;
    }
  }
  
  console.log(cnt);
}

solution(doc, search);