function solution(n) {
    // 피자는 7조각으로 잘라줌
    // n명이 피자 1조각씩 먹기 위해서 필요한 피자 개수
    
    if (n <= 7) return 1;
    const test = Math.floor(n / 7) ;
    
    const test2 = Math.floor(n % 7);
    
    return test2 > 0 ? Math.floor(n / 7) + 1 : Math.floor(n / 7);
}