/**
 *
 * @param name 그리워하는 사람
 * @param yearning 그리움 점수 배열
 * @param photo 추억 점수
 * @returns {*[]}
 */
function solution(name, yearning, photo) {
  const user = {}
  for (let i = 0; i < name.length; i++){
    user[name[i]] = yearning[i] || 0;
  }
  return photo.map((value) => {
    let add = 0;
    value.forEach(target => {
      add += user[target] || 0;
    })
    return add;
  });
}

const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];

solution(name, yearning, photo)

/**
 * @description  reduce 활용
 */
function solution(name, yearning, photo) {
  let obj = {};
  for(let i = 0; i < name.length; i++){
    obj[name[i]] = yearning[i];
  }
  return photo.map(value => value.map(v => obj[v] ? obj[v] : 0).reduce((acc,cur) => acc + cur,0))
}

function solution(name, yearning, photo) {
  return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))
}
