/**
 * @param numbers
 * @returns {*[]}
 */
function solution(numbers) {
    const arr = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            let sum = numbers[i] + numbers[j];
            if(arr.indexOf(sum) === -1) {
                arr.push(sum);
            }
        }
    }
    arr.sort((a, b) => a - b);
    return arr;
}

const numbers = [2,1,3,4,1];
solution(numbers);


// SET 활용
function solution2(numbers) {
    const temp = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]
    return answer.sort((a, b) => a - b)
}