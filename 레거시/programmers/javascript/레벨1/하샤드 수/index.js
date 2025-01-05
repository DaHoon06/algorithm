function solution(x) {
    const result = x.toString().split('').map((num) => parseInt(num)).reduce((a, b) => a + b);
    return !(x % result);
}

console.log(solution(13))

// 다른 사람 풀이 1
function Harshad(n){
    return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

// 풀이 2
function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}

