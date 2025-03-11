// a, b, c 를 모두 포함하는 부분 집합의 개수

const s = "abcabc"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb".

// left 1 right 1 = 4
// left 2 right 2 = 10
// left 3 right 3 = 18
// left 4 right 4 = 26
// 4 * 5
// set 에 처넣고, 사이즈 3되면 양옆으로 퍼지기 ㄱㄱ
var numberOfSubstrings = function (s) {
    const set = new Set()
    const obj = {
        a: -1,
        b: -1,
        c: -1,
    }
    let result = 0

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        set.add(char)
        obj[char] = i

        if (set.size === 3) {
            const minIdx = Math.min(obj.a, obj.b, obj.c)
            result += minIdx + 1
        }


    }

    return result
};

console.log(numberOfSubstrings(s))