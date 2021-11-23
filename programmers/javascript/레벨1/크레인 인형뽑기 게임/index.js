/**
 *
 * @param board: 5x5 ~ 30x30
 * @param moves
 * @returns {number}
 */

function solution(board, moves) {
    let answer = 0;
    this.stack.push(0);
    //이동한 회수만큼
    for(let i in moves){
        for(let j = 0; j < board.length; j++){
            if(board[j][i - 1] === 0){
                board[j][i - 1] = 0;
                break;
            } else {
                if(board[j][i - 1] === this.stack.peek()){
                    this.stack.pop();
                    answer += 2;
                } else {
                    this.stack.push(board[j][i - 1]);
                }
            }
        }
    }
    return answer;
}

const stack = () => {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

const push = (e) => {
    this.dataStore[this.top++] = e;
}

const pop = () => {
    return this.dataStore[--this.top];
}

const peek = () => {
    return this.dataStore[this.top - 1];
}

const clear = () => {
    this.top = 0;
}

const length = () => {
    return this.top;
}