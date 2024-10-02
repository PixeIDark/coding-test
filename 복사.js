// 원본 배열
let arr = [1, { a: 2 }, [3, 4]];

// 1. 전개 연산자를 사용한 얕은 복사
let shallowCopy = [...arr];

// 2. 깊은 복사 (JSON 방식 사용)
let deepCopy = JSON.parse(JSON.stringify(arr));

// 3. 테스트를 위한 변경
arr[0] = 10; // 최상위 원시 값 변경
arr[1].a = 20; // 중첩된 객체의 속성 변경
arr[2][0] = 30; // 중첩된 배열의 요소 변경

// 4. 결과 출력
console.log("원본:", arr);
console.log("얕은 복사:", shallowCopy);
console.log("깊은 복사:", deepCopy);

// 5. 참조 비교
console.log("얕은 복사 - 객체 참조 동일:", arr[1] === shallowCopy[1]);
console.log("얕은 복사 - 배열 참조 동일:", arr[2] === shallowCopy[2]);
console.log("깊은 복사 - 객체 참조 동일:", arr[1] === deepCopy[1]);
console.log("깊은 복사 - 배열 참조 동일:", arr[2] === deepCopy[2]);

// 얕은 복사는 최상위 요소만 새로운 참조를 만들고, 깊은 복사는 모든 것. 중첩된 객체나 배열까지도 새로운 참조로 만듬.
// let a = arr 은 복사가 아니고 그냥 할당임. 아무 참조도 안 만들어지고 원본의 주소 값을 가짐.
