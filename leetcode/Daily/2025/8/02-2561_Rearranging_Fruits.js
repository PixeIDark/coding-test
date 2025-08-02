// 매턴 바구니 과일 교체 비용은 Math.min(i, j)
// 두 바구니의 가격차이가 홀수면 도달 불가능
// 교체할 요소둘의 차이 * 2 만큼 가격차이가 줄어듬
// 큰 요소와 작은 요소 쌍으로 우선. 열세인 쪽이 작은 요소를 줘야함
// 1. basket1 빈도 + basket2 빈도 합치고 빈도수 / 2
// 2. basket1 빈도와 합친 빈도수를 비교해서 소실된것과 얻은 것들 정리
// 67분
var minCost = function (basket1, basket2) {
    const freq1 = new Map(); // basket1
    const freq2 = new Map(); // 전체

    for (let i = 0; i < basket1.length; i++) {
        freq1.set(basket1[i], (freq1.get(basket1[i]) ?? 0) + 1);
        freq2.set(basket1[i], (freq2.get(basket1[i]) ?? 0) + 1);
        freq2.set(basket2[i], (freq2.get(basket2[i]) ?? 0) + 1);
    }


    console.log(freq2) // { 4 => 1, 1 => 1, 2 => 2 }
    console.log(freq1) // { 4 => 1, 2 => 3 }
    // 1을 얻고 2를 내줘야함
    // freq2 기준으로 순회 없거나 개수 차이나는 것을 배열에 넣음

    const arr = [];

    for (const [key, value] of freq2) {
        if (value % 2 === 1) return -1;

        const diff = Math.abs((freq1.get(key) ?? 0) - value / 2);

        if (!diff) continue;

        for (let i = 0; i < diff; i++) {
            arr.push(key);
        }

    }


    arr.sort((a, b) => a - b);
    const min = Math.min(...basket1, ...basket2);
    let sum = 0;

    for (let i = 0; i < arr.length / 2; i++) {
        sum += Math.min(arr[i], min * 2);
    }


    return sum;
};