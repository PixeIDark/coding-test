// 시작 지점 선택 가능하고, 앞으로 나아갈때는 k 만큼 나아가야함. 이 때 가장 많은 에너지를 반환
// 에너지를 뒤에서부터 순회하면서 i - k 할당 해보자
// 21분
var maximumEnergy = function (energy, k) {
    const n = energy.length

    for (let i = n - 1; i > k - 1; i--) {
        energy[i - k] += energy[i]
    }

    return Math.max(...energy)
};