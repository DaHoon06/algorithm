/**
 *
 * @param a: Month
 * @param b: Day
 * @returns {string} 요일 이름 리턴 : SUN, MON, TUE, WED, THU, FRI, SAT
 */
function solution(a, b) {
    const year = '2016';
    let month = '-'+a+'';
    let day = '-'+b+'';
    if(a < 10) month = '-0'+a+'';
    if(b < 10) day = '-0'+b+'';

    const yyyymmdd = year+month+day;
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return  week[new Date(yyyymmdd).getDay()];
}

const a = 5;
const b = 24;
solution(a,b); // return 'TUE'

// 두번째 solution
function solution2(a,b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = new Date(`2016-${a}-${b}`);
    const day = date.getDay();

    return week[day];
}