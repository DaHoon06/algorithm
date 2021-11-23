function solution1(board, moves) {
    const basket = [];
    let result = 0;

    moves.forEach(order => {
        const doll = pickUp(board, order - 1);

        if(doll){
            if(basket[basket.length - 1] === doll){
                basket.pop();
                result += 2;
            } else {
                basket.push(doll);
            }
        }
    })
    return result;
}

function pickUp(board,order) {
    for(let i = 0; i < board.length; i++){
        if(board[i][order] !== 0){
            const doll = board[i][order];
            board[i][order] = 0;
            return doll;
        }
    }
}

//----------------------------------------------------------------------

function solution2(board, moves) {
    let result = 0;
    let temp = 0;
    let basket = [];

    for(let i = 0; i < moves.length; i++) {
        for(let j = 0; j < board.length; j++) {
            if(board[j][moves[i]-1] !== 0) {
                if (temp === board[j][moves[i]-1]) {
                    result += 2;
                    if(basket.length > 0) {
                        basket.pop();
                        temp = basket[basket.length-1];
                    } else {
                        temp = 0;
                    }
                } else {
                    basket.push(board[j][moves[i]-1]);
                    temp = board[j][moves[i]-1];
                }
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }

    return result;
}