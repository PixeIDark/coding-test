// 공백 기준으로 s 뒤집기 공백있으면 공백 한칸으로 줄여서 줌

const s = "  hello world  "
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// 10분
// var reverseWords = function (s) {
//     const arr = s.split(' ')
//     const n = arr.length
//     let result = []
//
//     for (let i = n - 1; i >= 0; i--) {
//         if (arr[i] !== "") result.push(arr[i])
//     }
//
//     return result.join(" ")
// };

var reverseWords = function (s) {
    const n = s.length
    const arr = []
    let temp = ""

    for (let i = 0; i < n; i++) {
        const char = s[i]

        if (char !== "" && char !== " ") {
            temp += char
        }

        if ((char === " " || i === n - 1) && temp !== "") {
            arr.push(temp)
            temp = ""
        }
    }

    let result = arr[arr.length - 1]

    for (let i = arr.length - 2; i >= 0; i--) {
        result += " " + arr[i]
    }

    return result
};

console.log(reverseWords(s))