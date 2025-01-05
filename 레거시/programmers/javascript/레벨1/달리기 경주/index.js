/**
 * 타임 아웃..
 * @param players
 * @param callings
 */
function solution(players, callings) {
  for (let i = 0; i < callings.length; i++) {
    const playerIndex = players.indexOf(callings[i]);
    const tmp = players[playerIndex];
    players[playerIndex] = players[playerIndex - 1];
    players[playerIndex - 1] = tmp;
  }
  return players
}

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

// return ["mumu", "kai", "mine", "soe", "poe"]

solution(players, callings)
function solution(players, callings) {
  // 배열로만 처리하면 성능 이슈가 있어 인덱스를 담을 객체를 생성
  const idxs = {};

  // for문을 이용해 생성해놓은 객체에 {이름: 인덱스}를 담아준다.
  for (let i = 0; i < players.length; i++) {
    idxs[players[i]] = i;
  }

  // 해설진 명단을 forEach로 하나씩 확인한다.
  callings.forEach((player) => {

    // 마라 만들어둔 객체에 현재 부른 이름의 인덱스를 찾는다.
    const curIdx = idxs[player];

    // 앞에 있는 선수의 이름을 찾는다.
    const nextplayer = players[curIdx - 1];

    // 둘의 순서를 바꿔준다.
    players[curIdx - 1] = player;
    players[curIdx] = nextplayer;

    // 객체의 인덱스도 순서를 바꿔준다.
    idxs[player]--;
    idxs[players[curIdx]]++;
  });

  return players;
}
