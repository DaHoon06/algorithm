function solution(a, b) {
    let result = 0;

    for(let i = 0; i < a.length;i++){
        result += a[i]*b[i];
    }
    return result;
}

//reduce 를 활용한 풀이법
const reduce = (a,b) => {
    return a.reduce((result,_,i) => result +=a[i]*b[i],0);
}