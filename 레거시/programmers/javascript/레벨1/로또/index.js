/**
 *
 * @param lottos: 로또번호
 * @param win_nums: 당첨번호
 */
function solution(lottos, win_nums) {
    let answer = [];

    const arr = lottos.filter(lotto => win_nums.includes(lotto)).length;
    const zero = lottos.filter(lotto => lotto === 0).length;

    let min = 7 - arr >= 6 ? 6 : 7 - arr;
    let max = min - zero < 1 ? 1 : min - zero;

    answer = [max, min];
    return answer;
}
