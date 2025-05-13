// 모음 모아서 리버스 했을때의 값 반환

const s = "IceCreAm"
// Output: "AceCreIm"
// Explanation: The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// 모음 만나면 인덱스 i 기록 한 배열 만듬
// 배열 투 포인트로 순회하면서 [s[l], s[r]] = [s[r], s[l]
// 1. s 배열로 바꾸기
// 2. 모음 인지하기 => set 에 넣고 has 로 판별
// 3. 만든 배열에서 투포인트하기
// 4. 배열 스트링으로 바꿔서 리턴
// 10분
var reverseVowels = function (s) {
    const set = new Set(["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"])
    const vowelsIdx = []
    s = s.split("")

    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) vowelsIdx.push(i)
    }

    for (let left = 0, right = vowelsIdx.length - 1; left <= right; left++, right--) {
        [s[vowelsIdx[left]], s[vowelsIdx[right]]] = [s[vowelsIdx[right]], s[vowelsIdx[left]]]
    }

    return s.join("")
};

console.log(reverseVowels(s))