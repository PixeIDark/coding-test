// 선행 0 무시하고 version1 이크면 1, version2 크면 -1 반환
// .을 기준으로 split(), 이제 서로의 [0], [1] 이런식으로 비교를해서 우위를 찾을 때까지 인덱스증가
// 23분, 문제를 계속 잘못 이해함..
var compareVersion = function (version1, version2) {
    const first = version1.split(".")
    const second = version2.split(".")
    const n = Math.max(first.length, second.length)

    for (let i = 0; i < n; i++) {
        const num1 = Number(first[i] ?? 0)
        const num2 = Number(second[i] ?? 0)

        if (num1 > num2) return 1
        else if (num1 < num2) return -1
    }

    return 0
};