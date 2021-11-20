// 첫번째 방법..
function solution1(s){
    let result = 0;

    s = s.replace(/zero/g, 0);
    s = s.replace(/one/g, 1);
    s = s.replace(/two/g, 2);
    s = s.replace(/three/g, 3);
    s = s.replace(/four/g, 4);
    s = s.replace(/five/g, 5);
    s = s.replace(/six/g, 6);
    s = s.replace(/seven/g, 7);
    s = s.replace(/eight/g, 8);
    s = s.replace(/nine/g, 9);

    result = Number(s);
    return result;
}

// 두번째 방법..
function solution2(s){
    let result = s;
    let num = ['zero','one','two','three','four','five','six','seven','eight','nine'];

    for(let i = 0; i < num.length;i ++){
        let arr = result.split(num[i]);
        result = arr.join(i);
    }

    return Number(result);
}