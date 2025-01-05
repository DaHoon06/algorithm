/**
 *
 * @param ingredient: 식재료 배열
 * @returns {number}
 */
function solution(ingredient) {
    /*
    * 빵 - 야채 - 고기 - 빵 순서 : 1 - 2 - 3 - 1 순으로
    * */

    let count = 0;
    let arr = [];

    for (let i = 0; i < ingredient.length; i++) {
        const size = arr.push(ingredient[i]);
        if (size >= 4) {
            if (arr[size - 4] === 1 && arr[size - 3] === 2 && arr[size - 2] === 3 && arr[size - 1] === 1) {
                arr.splice(-4);
                count++;
            }
        }
    }
    return count;
}

console.log(solution([2,1,1,2,3,1,2,3,1]));
