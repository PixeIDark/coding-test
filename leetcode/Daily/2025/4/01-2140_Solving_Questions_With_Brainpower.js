// 최대점수 반환 문제 풀면 [1] 수치만큼 다음 문제 못품

const questions = [[3, 2], [4, 3], [4, 4], [2, 5]]
// Output: 157
// Explanation: The maximum points can be earned by solving questions 0 and 3.
// - Solve question 0: Earn 3 points, will be unable to solve the next 2 questions
// - Unable to solve questions 1 and 2
// - Solve question 3: Earn 2 points
// Total points earned: 3 + 2 = 5. There is no other way to earn 5 or more points.

// dp 갈기면됨
var mostPoints = function (questions) {
    const n = questions.length;
    const dp = Array(n).fill(0);

    // dp 에서 쿨타임 이후의 dp는 수치를 이어받을수 있음. 이어받는 수치와 건너뛰기로 얻은 수치를 비교해서 높은쪽을 할당

    // 쿨타임 개념을 접목시켜야함
    for (let i = n - 1; i >= 0; i--) {
        const [point, time] = questions[i];

        const pick = (dp[i + 1 + time] ?? 0) + point
        const skip = dp[i + 1] ?? 0
        
        dp[i] = Math.max(pick, skip);
    }

    return dp[0]
};

console.log(mostPoints(questions));