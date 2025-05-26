// 여러 개의 노드가 존재할 때 두 노드를 선택해서 서로 같은 집합에 있는지 판별
// 두 노드가 연결될 더 작은 노드가 부모가 되고 큰 노드가 자식이게
// 노드가 연결될 때마다 부모를 끊임없이 갱
// 부모가 그룹의 상징. 노드가 가르키는 부모로 그룹을 식별할 수 있음


const parent = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const connections = [
    [0, 1],  // 0과 1 연결
    [2, 3],  // 2와 3 연결
    [4, 5],  // 4와 5 연결
    [1, 3],  // 1과 3 연결 (결과적으로 0,1,2,3이 하나의 그룹)
    [6, 7],  // 6과 7 연결
    [5, 6],  // 5와 6 연결 (결과적으로 4,5,6,7이 하나의 그룹)
];

// 1. 부모 재귀 함수만들기
// 인덱스가 현재 요소가 다음이라 가정
const getParent = (parent, curr) => {
    if (parent[curr] === curr) return curr
    return parent[curr] = getParent(parent, parent[curr])
}

// 2. 부모가 같은지 판별하는 함수 만들기
const canParent = (parent, a, b) => {
    const light = getParent(parent, a)
    const dark = getParent(parent, b)

    return light === dark
}

// 3. 부모합치는 함수 만들기
const unionParent = (parent, a, b) => {
    // 노드 1, light 는 0이 할당됨
    a = getParent(parent, a)
    // 노드 3, dark 는 2가 할당됨
    b = getParent(parent, b)

    if (a < b) parent[b] = a
    else parent[a] = b
}

for (const [a, b] of connections) {
    unionParent(parent, a, b)
}

console.log(parent) // 부모가 달라도 그룹이 같을 수 있음 모든 노드에 대해 getParent 를 수행하면 compression 즉 평탄화되서 각 그룹은 모두 같은 부모를 바라봄
