/**
 *
 * @param numbers: 키패드 숫자
 * @param hand: 주로 사용하는 손
 * @returns {string}
 */
function solution(numbers, hand) {
    let answer = '';

    let leftIndex = 10;
    let rightIndex = 12;

    for(let num in numbers){
        if(num === 1 && num === 4 && num === 7){
            answer += 'L';
            leftIndex = num;
        } else if(num === 3 && num === 6 && num === 9){
            answer += 'R';
            rightIndex = num;
        } else {
            let leftLength = getLength(leftIndex,num);
            let rightLength = getLength(rightIndex,num);

            if(leftLength > rightLength){
                answer += 'L';
                leftIndex = num;
            } else if(leftLength < rightLength){
                answer += 'R';
                rightIndex = num;
            } else {
                if(hand === 'right') {
                    answer += 'R';
                    rightIndex = num;
                } else if(hand === 'left'){
                    answer += 'L';
                    leftIndex = num;
                }
            }
        }
    }
    return answer;
}

function getLength (index, num){
    index = (index === 0) ? 11 : index;
    num = (num === 0) ? 11 : num;

    let x = (index - 1) / 3;
    let y = (index - 1) % 3;
    let numX = num / 3;
    let numY = 1;

    return Math.abs(x - numX) + Math.abs(y - numY);
}