// s 를 최대한 많이 나누고 각 길이 반환 하위 배열은 서로 다른 요소를 지니고 있어야함.

const s = "eccbbbbdec"
// Output: [9,7,8]
// Explanation:
//     The partition is "ababcbaca", "defegde", "hijhklij".
//     This is a partition so that each letter appears in at most one part.
//     A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

// chatCode 로 최대 인덱스 최소 인덱스를 저장하고, 그룹을 만들 때 최소와 최대를 신경써서 해보자
// 최소 인덱스와 최대 인덱스 범위 안에 있는 문자는 무조건 그안의 그룹에 종속될수 밖에 없음
var partitionLabels = function (s) {
    const charCodes = new Map()

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (!charCodes.has(char)) {
            charCodes.set(char, [])
        }
        charCodes.get(char).push(i)

    }

    const createGroup = () => {
        const arr = []

        for (const charCode of charCodes) {
            const char = charCode[0]
            const start = charCode[1][0]
            const end = charCode[1][charCode[1].length - 1] ?? -1
            if (!arr.length) {
                arr[0] = start
                arr[1] = end
                charCodes.delete(char)
                continue
            }

            if ((arr[0] <= start && arr[1] >= start) || (arr[1] >= end && arr[0] <= start)) {
                arr[0] = Math.min(arr[0], start)
                arr[1] = Math.max(arr[1], end)
                charCodes.delete(char)
            }
        }

        return arr[1] - arr[0] + 1
    }

    const result = []

    while (charCodes.size) {
        result.push(createGroup())
    }

    return result
};

console.log(partitionLabels(s))