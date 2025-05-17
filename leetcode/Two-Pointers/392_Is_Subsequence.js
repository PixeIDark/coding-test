// s 는 t 의 하위 시퀸스인지

const s = "abc", t = "ahbgdc"
// Output: true

// 모르겠음 포문 밖에
// 8분
var isSubsequence = function (s, t) {
    if (s.length === 0) return true

    if (s.length > t.length) return false

    let j = 0

    for (let i = 0; i < t.length; i++) {
        if (s[j] === t[i]) j++

        if (j === s.length) return true
    }

    return false
};

console.log(isSubsequence(s, t))