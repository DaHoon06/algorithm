// video_len.length = pos.length = op_start.length = op_end.length = 5
// mm:ss 형식으로 이루어진 문자열
function solution(video_len, pos, op_start, op_end, commands) {
  var answer = "";
  return answer;
}

const video_len = "34:33";
const pos = "13:00";
const op_start = "00:55";
const op_end = "02:55";
const commands = ["next", "prev"]; // 10초 전, 10초 후

const result = "13:00";

console.log(solution(video_len, pos, op_start, op_end, commands)); // expects 13:00
