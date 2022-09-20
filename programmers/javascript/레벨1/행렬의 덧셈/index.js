function solution(arr1, arr2) {
    let answer = [];
    const size = arr1.length;
    for (let i = 0; i < size; i++) {
        let arr = [];
        const numArr1 = arr1[i];
        const numArr2 = arr2[i];

        for (let j = 0; j < numArr1.length; j++) {
            arr.push(numArr1[j] + numArr2[j]);
        }
        answer.push(arr)
    }
    return answer;
}

const arr1 = [[1,2],[2,3]];
const arr2 = [[3,4],[5,6]];
console.log(solution(arr1, arr2)); //[[4,6],[7,9]]

// 다른 사람 풀이 1
function sumMatrix(A,B){
    return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}


