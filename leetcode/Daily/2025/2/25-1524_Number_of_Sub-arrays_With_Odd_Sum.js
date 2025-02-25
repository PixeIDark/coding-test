// 합이 홀수인 부분 집 개수 구하기

const arr = [1, 2, 3, 4, 5, 6, 7]
// Output: 4
// Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
// All sub-arrays sum are [1,4,9,3,8,5].
// Odd sums are [1,9,3,5] so the answer is 4.

// 합 홀수의 조건은 부분집합 중 홀수가 하나라도 있어야함. 홀수의 개수가 홀수면 합이 홀수, 짝수면 합이 짝수임.
// arr 에서 홀수인 요소만 집합 만들고 카운팅하자. 짝수는 변별력없음
var numOfSubarrays = function (arr) {
    // bfs 만들고 안에서 포문 돌려서 잘해보자. 요소가 짝수인 경우는 continue 해주고
    // 합을 계속 체크해서 홀수면 카운팅해주자.
    let result = 0
    // bfs 아닌 2차 포문도 가능하다

    // sum말고 홀수 개수로 하자. 수가 너무 커진다
    // 시간초과. 총 부분 집합의 개수는 n * (n + 1) / 2 인 점을 활용해야함
    // 홀수개수 모음에서 짝수를 만나면 홀수 개수만큼 카운팅. 홀수를 만나면 홀수 개수 / 2 내림 + 1(자기 자신)
    // 짝수개수 홀수개수 둘다 상호작용해야함
    let count = [1, 0]; // 빈 배열은 합이 0으로 짝수로 카운트
    let currentSum = 0;

    for (let num of arr) {
        // 현재 숫자를 더해서 홀짝성만 저장 (0 또는 1)
        currentSum = (currentSum + num) % 2;

        // 현재 누적합이 홀수인 경우, 짝수 합 prefix와의 차이가 홀수가 됨
        if (currentSum === 1) {
            result = (result + count[0])
        } else {
            // 현재 누적합이 짝수인 경우, 홀수 합 prefix와의 차이가 홀수가 됨
            result = (result + count[1])
        }

        // 현재 누적합 타입(홀수/짝수) 카운트 증가
        count[currentSum]++;
    }

    return result;
};

console.log(numOfSubarrays(arr))