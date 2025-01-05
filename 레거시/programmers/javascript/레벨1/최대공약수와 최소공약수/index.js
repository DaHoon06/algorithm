/*
*   최대공약수 : 두 수 A와 B의 공통된 약수 중 가장 큰 약수.
*   2 부터 min(A, B)를 모든 정수로 나누어 보는 것.
* */

/*
*     최소공배수 : 두 수, 혹은 그 이상의 여러 수의 공통인 배수 중 가장 작은 수
*     1 부터 시작하여 수를 점점 증가시키며 각각의 수를 증가시킨 수로 나누었을 때 나머지 값이 0인 값인지를 확인
* */
const gcf = (n, m) => {
    let gcf = 1;
    for (let i = 2; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            gcf = i;
        }
    }
    return gcf;
}

const lcm = (n, m) => {
    let lcm = 1; // least common multiple
    while(true){
        if((lcm % n === 0) && (lcm % m === 0))break;
        lcm++;
    }
    return lcm;
}
function solution(n, m) {
    let gcf1 = gcf(n,m); // greatest common factor
    let lcm1 = lcm(n,m); // least common multiple
    return [gcf1, lcm1];
}


console.log(solution(3, 12)) // [3, 12]
// 첫번째 최대공약수
// 두번째 최소공배수


// 다른 사람 풀이 1
function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}

// 다른 사람 풀이 2
function gcdlcm(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}
