// 앤드연산자 길이 반환 가장 긴.

const nums = [84139415, 693324769, 614626365, 497710833, 615598711, 264, 65552, 50331652, 1, 1048576, 16384, 544, 270532608, 151813349, 221976871, 678178917, 845710321, 751376227, 331656525, 739558112, 267703680]
// Output: 3
// Explanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:
//     - 3 AND 8 = 0.
//     - 3 AND 48 = 0.
//     - 8 AND 48 = 0.
// It can be proven that no longer nice subarray can be obtained, so we return 3.

// 3: 11
// 100 4 101 5 110 6 111 7 1000 8 1100 12
// 11 1100 1000 <= 3 8 12
// 부분 배열집합이 서로가 모두 검증되어야해 <= 모든쌍이 앤드 0 나와야함
// 서로 검증하는 식으로하면 시간복잡도가 미쳐 날뒴. 비트의 특징을 이용해보자
// 모두 이진수 단위가 달라야 설립하는 관계임
var longestNiceSubarray = function (nums) {
    //  3 & 8 로 검증을 한 뒤 3 | 8 을 해서 뭉쳐서 그다음꺼랑 계속 비교하는 식으로해보자
    // dfs 갈기면 성공은 할꺼같은디.. 시간 오엔으로 해야함
    // A subarray is a contiguous part of an array.... 앞으론 문제 잘 읽자.. 슬라이딩ㄱㄱ
    let prev = 0
    let result = 1
    let start = 0

    for (let i = 0; i < nums.length; i++) {

        while (nums[i] & prev) {
            prev ^= nums[start]
            start++
        }

        prev |= nums[i]
        result = Math.max(result, i - start + 1)
    }


    return result
};

console.log(longestNiceSubarray(nums))
