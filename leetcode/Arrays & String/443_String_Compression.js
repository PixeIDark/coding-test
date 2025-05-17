// 압축해서 반환

const chars = ["a", "a", "b", "b", "c", "c", "c"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

// 일정한 추가 공간만을 사용하는 알고리즘을 작성해야 합니다. <= 원시형만 쓰라는 거 같음
// 출력값으로 길이를 반환하는 동시에 입력값도 변경시켜야하네 ㅋㅋㅋㅋㅋ
// start, end 변수를 만들어서 같은 문자인 구간의 인덱스를 저장
// 문자가 바뀌게 되면 splice(start,end)로 배열 삭제 <= 배열을 뒤에서부터 순회하면 편할듯
// 출력으로 배열 길이 반환 splice(인덱스, 길이)
// 51분, 혐오스러움 GOAT 질문, 예시, 합리성 모두 구데기
var compress = function (chars) {
    let left = chars.length - 1
    let right = left

    // 문제는 right - left + 1 이 10이상일 시 어떻게 하냐임
    for (let i = chars.length - 2; i >= -1; i--) {
        const length = right - left

        if (chars[i] === chars[i + 1]) {
            left--
        } else {
            const value = String(length + 1)
            let k = 1
            chars.splice(left + k, length)

            if (length + 1 > 1) {
                for (const v of value) {
                    chars.splice(left + k, 0, v)
                    k++
                }
            }

            left--
            right = left
        }
    }

    return chars.length
};

console.log(compress(chars));