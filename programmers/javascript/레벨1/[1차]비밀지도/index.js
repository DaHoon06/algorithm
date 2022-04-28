function solution(n, arr1, arr2) {
    const result = [];

    for (let i = 0; i < n; i++) {
        const map1 = arr1[i].toString(2).padStart(n, 0);
        const map2 = arr2[i].toString(2).padStart(n, 0);

        let resultMap = '';
        for(let j = 0; j < n; j++) {
            if (map1[j] === '1' || map2[j] === '1') {
                resultMap += '#';
            } else {
                resultMap += ' ';
            }
        }
        result.push(resultMap);
    }
    return result;
}
// 처음의도 각각의 배열을 먼저 # ' '으로 구분하여 합칠려고 했는데...너무 어렵게 생각했다...
function replaceArr(arr) {
    const result = [];
    arr.forEach(v => {
        if (v.toString(2).length < 5) {
            const size = v.toString(2).length;
            const num = 5 - size;
            result.push(' '.repeat(num)+v.toString(2).replace(/1/gi,'#').replace(/0/gi,' '));
        } else {
            result.push(v.toString(2).replace(/1/gi,'#').replace(/0/gi,' '))
        }
    });
    return result;
}

//--------------------
function solution2(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}

const n = 5; // 한변의 길이 ( 정사각형 )
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
solution(n,arr1,arr2) // ["#####","# # #", "### #", "# ##", "#####"]