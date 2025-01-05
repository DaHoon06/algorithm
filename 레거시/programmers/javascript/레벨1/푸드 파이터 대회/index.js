/*
* 왼쪽부터 오른쪽으로 이동
* 음식 중앙에는 물을 배치 물은 0
* */

// 풀이 1.
function solution(food) {
    let arr = [];

    food.map((a,b,) => {
        a = a % 2 === 0 ? a : a - 1;
        for (let i = 0; i < a / 2; i++) {
            arr.push(b)
        }
    });
    return arr.join('') + 0 + arr.reverse().join('');
}

/*
*
* */
const food = [1, 3, 4, 6];
console.log(solution(food)); // 1 2 2 3 3 3 0 3 3 3 2 2 1

const food2 = [1, 7, 1, 2]; // 1 1 1 3 0 3 1 1 1

// 풀이 2
function solution(food) {
    let player1 = [];
    let player2 = [];
    let repeat = 0;
    for (let i = 1; i <= food.length; i++) {
        if (food[i] > 1) {
            repeat = Math.floor(food[i] / 2);
            for (let j = 0; j < repeat; j++)
                player1.push(i)
            for (let k = 0; k < repeat; k++)
                player2.unshift(i)
        }
    }
    player1.push(0);
    player1 = player1.concat(player2);
    return player1.join("");
}

// 풀이 3
function solution(food) {
    let temp = '';
    let result = '';
    for (let i = 1; i < food.length; i++) {
        temp += `${i}`.repeat(Math.floor(food[i] / 2));
    }
    result += temp + 0;
    for (let i = temp.length - 1; i >= 0; i--) {
        result += temp[i];
    }
    return result;
}

// 풀이 4
function solution(food) {
    let part = [];
    for (let i = 1; i < food.length; i++) {
        part.push(i.toString().repeat(Math.floor(food[i] / 2)));
    }

    return [part.join(''), part.reverse().join('')].join('0');
}
