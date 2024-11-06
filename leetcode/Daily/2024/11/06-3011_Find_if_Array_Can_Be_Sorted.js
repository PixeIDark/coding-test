// 비트로 변환 후 1개수가 같은 놈들끼리는 자리를 바꿀수 있음. 정렬되는지 여부

const num = [8, 4, 2, 30, 15];
// Output: true
// Explanation: Let's look at the binary representation of every element. The numbers 2, 4, and 8 have one set bit each with binary representation "10", "100", and "1000" respectively. The numbers 15 and 30 have four set bits each with binary representation "1111" and "11110".
// We can sort the array using 4 operations:
//     - Swap nums[0] with nums[1]. This operation is valid because 8 and 4 have one set bit each. The array becomes [4,8,2,30,15].
// - Swap nums[1] with nums[2]. This operation is valid because 8 and 2 have one set bit each. The array becomes [4,2,8,30,15].
// - Swap nums[0] with nums[1]. This operation is valid because 4 and 2 have one set bit each. The array becomes [2,4,8,30,15].
// - Swap nums[3] with nums[4]. This operation is valid because 30 and 15 have four set bits each. The array becomes [2,4,8,15,30].
//     The array has become sorted, hence we return true.
//     Note that there may be other sequences of operations which also sort the array.

//
var canSortArray = function (nums) {};
