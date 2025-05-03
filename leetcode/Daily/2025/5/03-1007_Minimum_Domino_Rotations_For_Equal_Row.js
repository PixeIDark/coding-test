// 행을 같게 만드는데 필요한 움직임 횟수. 안되면 -1

const tops = [2, 1, 2, 4, 2, 2], bottoms = [5, 2, 6, 2, 3, 2]
// Output: 2
// Explanation:
//     The first figure represents the dominoes as given by tops and bottoms: before we do any rotations.
//     If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.

// 행을 하나로 보고 각 열을 보면 두가지의 선택지를 가짐
// 완료 조건이 두 가지 중 하나가 모든열에 있어야함. 비트마스터 각?
// 비트로 해봐 일단 10 1
// 한번 순회해서 소외 숫자((n1 + n2) < tops.length) 제외하고 나머지 숫자들을 다 대입해보는 방법도 있음
// 아 이방법은 유효 숫자가 최대 두 개가 나옴 일케하면 그 둘 중 하나로 해보는 수밖에없음
var minDominoRotations = function (tops, bottoms) {
    const arr = Array(7).fill(0)
    const n = tops.length
    let most = 0

    for (let i = 0; i < n; i++) {
        arr[tops[i]] += 1
        arr[bottoms[i]] += 1

        if (arr[tops[i]] >= n) {
            most = tops[i]
            break
        }

        if (arr[bottoms[i]] >= n) {
            most = bottoms[i]
            break
        }
    }

    if (!most) return -1

    let topCount = 0
    let bottomCount = 0
    
    for (let j = 0; j < n; j++) {
        if (tops[j] === most) topCount++
        if (bottoms[j] === most) bottomCount++
        if (tops[j] !== most && bottoms[j] !== most) {
            return -1
        }
    }

    return (n - (Math.max(topCount, bottomCount)))
};

console.log(minDominoRotations(tops, bottoms))