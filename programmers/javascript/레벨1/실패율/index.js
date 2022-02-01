/**
 *
 * @param N: 스테이지 수
 * @param stages: 현재 멈춰있는 스테이지 배열
 * @returns {*[]}: 실패율이 높은 스테이지부터 내림차순
 */
function solution(N, stages) {
    let arr = [];
    // 전체 인원수
    let total = stages.length;

    for(let i = 1; i <= N; i++){
        let player = stages.filter(ele => ele === i).length;
        let failRatio = 0;

        if(player === 0) failRatio = 0;
        else failRatio = (player) / total;

        total -= player;
        arr.push({
            idx: i,
            ratio: failRatio
        });
    }

    arr.sort((a,b) => {
       if(a.ratio > b.ratio) {
           return -1;
       } else if(a.ratio < b.ratio) {
           return 1;
       } else {
           if(a.idx > b.idx) return 1;
           else return -1;
       }
    });

    return arr.map(ele => ele.idx);
}