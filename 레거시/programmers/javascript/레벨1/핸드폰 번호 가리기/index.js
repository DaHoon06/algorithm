function solution(phone_number) {
    const phone = phone_number.split('');
    phone.forEach((num,index) => {
        if (index >= phone.length - 4) return;
        phone[index] = '*';
    });
    return phone.join('');
}

console.log(solution('01012341234'));

// 다른 사람 풀이 1.
// 정규식 사용
function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}

// 풀이 2
// 아....
function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    //함수를 완성해주세요

    return result;
}
