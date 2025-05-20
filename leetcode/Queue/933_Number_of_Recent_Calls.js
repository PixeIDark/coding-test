// 클래스 만들어서 반환

// Input ["RecentCounter", "ping", "ping", "ping", "ping"]
//       [[], [1], [100], [3001], [3002]]
// Output [null, 1, 2, 3, 3]
// Explanation
// RecentCounter recentCounter = new RecentCounter();
// recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
// recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
// recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
// recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3


var RecentCounter = function () {
    this.queue = []
};

// 요청을하면 t-3000 ~ t 사이에의 값이 큐에 몇개나 있는지 반환
// 핑의 t는 항상 엄격하게 증가하는 테스트로만 이루어짐
// 방법 1. 푸시하고 t - 3000 까지 queue 를 역순부터 뒤져서 몇개인지 카운팅 <= 별로 맘에 안듬 이것박에 생각이안남.. ㅎㄴ
// 16분
RecentCounter.prototype.ping = function (t) {
    let count = 1

    for (let i = this.queue.length - 1; i >= 0; i--) {
        const num = this.queue[i]
        if (t - 3000 > num || t < num) break

        count++
    }

    this.queue.push(t)

    return count
};

const a = new RecentCounter()
a.ping(4)
const b = a.ping(3400)
console.log(b)