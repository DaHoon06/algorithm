function solution(answers) {
    const arr1 = [1,2,3,4,5];
    const arr2 = [2,1,2,3,2,4,2,5];
    const arr3 = [3,3,1,1,2,2,4,4,5,5];

    const result = [];

    const first = answers.filter((e,i) => e === arr1[i % arr1.length]).length;
    const second = answers.filter((e,i) => e === arr2[i % arr2.length]).length;
    const third = answers.filter((e,i) => e === arr3[i % arr3.length]).length;

    const max = Math.max(first,second,third);

    if(first === max) result.push(1);
    if(second === max) result.push(2);
    if(third === max) result.push(3);

    return result;
}