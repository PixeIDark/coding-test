// count(n) 합이 n인 쌍개수
// add(a, b) nums2 a 인덱스 요소에 b 더하기
// 해시맵으로 요소를 키로 값을 빈도로 저장
// count: 해시맵을 순회해서 sum - key 인 key를 식별하고 값 * 값으로 쌍 개수를 특정
// add: 원본 배열의 더할 요소를 특정한 후 배열과 해시맵 양쪽에 더한 값을 갱신함
// 34분, ...코파일럿, 에러렌 없으니 문법적 오류로 너무 지체됨
var FindSumPairs = function (nums1, nums2) {
    this.nums1 = nums1
    this.nums2 = nums2

    this.freq1 = new Map()
    this.freq2 = new Map()

    for (const num of this.nums1) {
        this.freq1.set(num, (this.freq1.get(num) ?? 0) + 1)
    }

    for (const num of this.nums2) {
        this.freq2.set(num, (this.freq2.get(num) ?? 0) + 1)
    }
};

FindSumPairs.prototype.add = function (index, val) {
    const target = this.nums2[index]

    this.freq2.set(target, this.freq2.get(target) - 1)
    if (this.freq2.get(target) === 0) this.freq2.delete(target)

    const sum = target + val

    this.freq2.set(sum, (this.freq2.get(sum) ?? 0) + 1)
    this.nums2[index] = sum
};

FindSumPairs.prototype.count = function (tot) {
    let pairs = 0

    for (const [key1, value1] of this.freq1) {
        const key2 = tot - key1
        if (!this.freq2.has(key2)) continue

        const value2 = this.freq2.get(key2)
        pairs += value1 * value2
    }

    return pairs
};
