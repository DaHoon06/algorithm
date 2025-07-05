function solution(babbling) {
    const reg = /^(aya|ye|woo|ma)+$/;
    var answer = 0;
    babbling.forEach(value => {
        if(reg.test(value)) answer++;
        
    });
    
    return answer;
}