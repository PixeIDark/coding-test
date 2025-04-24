// 세고 말하기

const n = 30
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = RLE of "1" = "11"
// countAndSay(3) = RLE of "11" = "21"
// countAndSay(4) = RLE of "21" = "1211"

var countAndSay = function (n) {
    let str = "1"

    for (let i = 2; i <= n; i++) {

        let count = 0
        let newStr = ""
        let select = ""
        for (let j = 0; j <= str.length; j++) {
            if (select !== str[j] || j === str.length) {
                if (count) {
                    newStr += String(count) + select
                }
                select = str[j]
                count = 1
            } else count++

        }
        str = newStr
    }

    return str
};

console.log(countAndSay(n))