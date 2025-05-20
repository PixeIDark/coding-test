// 양수는 오른쪽 음수는 왼쪽으로 움직이고 서로 만나면 작은 쪽이 사라짐. 같으면 둘 다 사라짐 최종 배열 반환

const asteroids = [-2, -2, 1, -2]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

// 스택에 걍 다넣음
// 음수를 만나고 스택의 마지막이 양수면 양수를 심판해서 제거함 혹은 살던가
// 제거 한 후 또 마지막에 양수면 심판해서 반복 음수가 나올 떄까지 스택 0이거나
// 17분
var asteroidCollision = function (asteroids) {
    const stack = []

    for (const asteroid of asteroids) {
        if (asteroid > 0) stack.push(asteroid)
        else if ((stack[stack.length - 1] < 0 || stack.length === 0) && asteroid < 0) stack.push(asteroid)

        while (stack[stack.length - 1] > 0 && asteroid < 0) {
            if (stack[stack.length - 1] < Math.abs(asteroid)) {
                stack.pop()
                if (stack.length === 0 || stack[stack.length - 1] < 0) stack.push(asteroid)
            } else if (stack[stack.length - 1] === Math.abs(asteroid)) {
                stack.pop()
                break
            } else break
        }
    }

    return stack
};

console.log(asteroidCollision(asteroids))