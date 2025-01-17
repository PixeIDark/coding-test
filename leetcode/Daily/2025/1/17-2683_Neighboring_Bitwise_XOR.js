// 원본 존재 하는지

const derived = [1, 0];
// Output: true
// Explanation: A valid original array that gives derived is [0,1,0].
//     derived[0] = original[0] ⊕ original[1] = 0 ⊕ 1 = 1
// derived[1] = original[1] ⊕ original[2] = 1 ⊕ 0 = 1
// derived[2] = original[2] ⊕ original[0] = 0 ⊕ 0 = 0

var doesValidArrayExist = function (derived) {
  return derived.reduce((a, b) => a ^ b) === 0;
};

console.log(doesValidArrayExist(derived));
