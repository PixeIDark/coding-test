// 최대한 발리 수리하는 시간 몇분인지

const ranks = [5, 1, 8], cars = 6
// Output: 16
// Explanation:
//     - The first mechanic will repair one car. The time required is 5 * 1 * 1 = 5 minutes.
// - The second mechanic will repair four cars. The time required is 1 * 4 * 4 = 16 minutes.
// - The third mechanic will repair one car. The time required is 8 * 1 * 1 = 8 minutes.
//     It can be proved that the cars cannot be repaired in less than 16 minutes.​​​​​

//  r * n2
// 최대시간 부터 해서 이진법으로 잘 넣어서 해보자ㅣ
//
var repairCars = function (ranks, cars) {

    // 차를 몇개씩 줘야할까?
    const ace = Math.min(...ranks)

    let left = ace
    let right = ace * cars * cars

    while (left < right) {
        const mid = Math.floor((left + right) / 2)

        let count = 0
        for (const rank of ranks) {
            const newCar = Math.floor(Math.sqrt(mid / rank))
            count += newCar

        }

        if (count >= cars) right = mid
        else left = mid + 1

    }

    return left
};

console.log(repairCars(ranks, cars))