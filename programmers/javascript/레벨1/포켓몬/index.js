/**
 *
 * @param nums: 포켓몬 번호가 담긴 배열
 */
function solution(nums) {
    let result = [];
    let N = nums.length; // 총 포켓몬
    let choice = N / 2;  // 내가 선택 할 수 있는 포켓몬 수

    for(let i = 0; i < N; i++){
        if(result.length < choice) {
            if(!result.includes(nums[i])){
                result.push(nums[i]);
            }
        }
    }
    return result.length;
}
//아 SET...
function solution2(nums) {
    const max = nums.length/2;
    const arr = [...new Set(nums)];

    return arr.length > max ? max : arr.length
}
function solution3(nums){
    let answer = [...new Set(nums)]
    let limit = nums.length/2;

    return answer.length > limit ? limit : answer.length;
}