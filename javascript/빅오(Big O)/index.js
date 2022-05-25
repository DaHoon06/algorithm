
function question1(N) {
    let result = 0;
    for (let i = 1; i <= N; i++) {
        result += i;
    }
    return result;
}
const N = 1000000;

console.time('첫번째')
question1(N);
console.timeEnd('첫번째');

function sample1(N) {
    return N * (N + 1) / 2;
}

console.time('두번째');
sample1(N);
console.timeEnd('두번째');
