// 1 주변 n 범위 안에 1이 없는 조건을 충족하며 0에 1을 할당할 수 있는지

const flowerbed = [0, 0, 0, 0, 0, 1, 0, 0], n = 0
// Output: true

// 0 인덱스에서 dp 에 기록해가며 전진
// 꽃을 만나게 되면  i + n + 1 인덱스 로 건너뛰어서 거기부터 탐색 i + n 까지는 false 로 구역 지정해놔야함
// 꽃을 만나게 되면 또 반복함
// 이제 역순으로 돌면서 꽃을 만나면 i - n - 1 건너뛰어서 여기부터 탐색하면서 i - n 까지는 false 로 구역 지정함
// 문제 잘못 해석함...
// n 은 범위가 아니라 심을 수 있는 꽃의 개수임
// 꽃을 심을 때마다 n--  꽃은 0의 양옆1범위내에 꽃이 없을 경우 심을 수 있음
// 걍 1만나면 양쪽 인덱스에 false 갈겨줌
// 55분
var canPlaceFlowers = function (flowerbed, n) {
    const m = flowerbed.length

    for (let i = 0; i < m; i++) {
        if ((flowerbed[i - 1] ?? 0) === 0 && flowerbed[i] === 0 && (flowerbed[i + 1] ?? 0) === 0) {
            flowerbed[i++] = 1
            n--
        }

        if (n <= 0) return true
    }

    return false
};

console.log(canPlaceFlowers(flowerbed, n));