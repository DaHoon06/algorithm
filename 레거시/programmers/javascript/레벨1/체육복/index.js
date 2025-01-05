/**
 *
 * @param n: 전체 학생 수
 * @param lost: 도난 당한 학생 수
 * @param reserve: 여벌의 체육복을 가진 학생 수
 * @returns {number}: 체육을 듣는 학생의 수 최댓값
 */
function solution_error(n, lost, reserve) {
    let lostStudent = lost.filter(a => !reserve.includes(a));
    let reserveStudent = reserve.filter(a => !lost.includes(a));

    return n - lostStudent.filter(lostStudent => {
        let extra = reserveStudent.find(reserveStudent => Math.abs(reserveStudent - lostStudent))
        if(!extra) return true;

        reserveStudent = reserveStudent.filter(reserveStudent => reserveStudent !== extra);
    }).length;
}// 이 solution 틀렸다고 나옴;;;


function solution(n, lost, reserve){
    let lostStudents = lost.filter(a => reserve.includes(a));
    let reserveStudents = reserve.filter(a => lost.includes(a));


    return
}