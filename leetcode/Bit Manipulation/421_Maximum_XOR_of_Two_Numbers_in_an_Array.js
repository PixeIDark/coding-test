// XOR: 1 ^ 100 = 5, || => 1, && => 0
// 모든 비트를 trie로 정리, nums를 순회하면서 "1" <=> "0" 반대로 참조해서 가장 깊게 가는게 정답
// 자기 자신의 참조는 무조건 0. 중복 고려안해도됨
// TODO: TLE, trie 말고 비트로 풀어야하는데 모르겠음
var findMaximumXOR = function (nums) {
  const maxNum = Math.max(...nums);
  const maxLength = maxNum.toString(2).length;
  const bits = nums.map((num) => num.toString(2).padStart(maxLength, "0"));
  let root = {};

  for (const bit of bits) {
    let node = root;

    for (const char of bit) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }
  }

  let result = 0;

  for (const bit of bits) {
    let node = root;
    let curr = 0;

    for (const char of bit) {
      const key = char === "0" ? "1" : "0";
      curr <<= 1;

      if (node[key]) {
        curr |= 1;
        node = node[key];
      } else node = node[char];
    }

    result = Math.max(result, curr);
  }

  return result;
};