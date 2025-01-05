function solution(s) {
    return s.split(' ')
        .map((value) => value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase()).join(' ');
}

console.log(solution('3people unFollowed me')); //3people Unfollowed Me
