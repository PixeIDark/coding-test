// 바구니는 두개 주어지고 각 바구니는 한종류의 과일밖에 못담음
// 만약에 과일을 담을수 없는 나무에 도달하면 즉시 증단해야함
// 나무마다 채취할 수 있는 과일은 1개씩임
// 최대과일을 수집할 수 있는 위치에서 시작해야함
// 슬라이딩에서 가장 많이 카운트되는 두종류의 정수를 찾아야함
// map 자료구조로 카운팅. map.size 가 3 이상일 시 슬라이딩 중단 => 종류를 두개로 좁힐 때까지 left++ 해서 다시 시작
// right 와 left 최대 차이가 정답
// 22분
var totalFruit = function (fruits) {
    const n = fruits.length;
    const freq = new Map();
    let max = 0;

    for (let l = 0, r = 0; r < n; r++) {
        const addFruit = fruits[r];
        freq.set(addFruit, (freq.get(addFruit) ?? 0) + 1);

        while (freq.size > 2) {
            const removeFruit = fruits[l++];

            freq.set(removeFruit, freq.get(removeFruit) - 1);
            if (freq.get(removeFruit) === 0) freq.delete(removeFruit);
        }

        max = Math.max(max, r - l + 1);
    }

    return max;
};