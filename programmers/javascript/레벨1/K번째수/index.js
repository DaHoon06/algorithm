/**
 *
 * @param array
 * @param commands: i, j, k
 * @returns {*[]}
 */
function solution(array, commands) {
    const result = [];
    const size = commands.length;

    for(let i = 0; i < size; i++){
        const sub = commands[i];
        const subStringNumber = array.slice(sub[0]-1,sub[1]).sort((a,b) => a - b);
        result.push(subStringNumber[sub[2]-1]);
    }
    return result;
}

//TODO: commands 의 0번째 수에서 시작하여 1번쨰 수만큼 자름
// 나온 값의 2번째 수를 저장
const array = [1,5,2,6,3,7,4];
const commands = [[2,5,3],[4,4,1],[1,7,3]];
solution(array,commands);
