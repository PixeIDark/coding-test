// 1 + 3 => 2 + 4 => 3
// 구간중 연속으로 나온 문자열 빈도 - 1 을 더해줌, prev 와 curr 이 같으면 + 1
// 4분
var possibleStringCount = function (word) {
    let result = 1

    for (let i = 1; i < word.length; i++) {
        if (word[i - 1] === word[i]) result++
    }

    return result
};