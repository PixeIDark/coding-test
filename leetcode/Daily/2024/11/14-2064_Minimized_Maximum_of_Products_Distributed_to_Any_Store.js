// 제품 분배하고 분배된 제품 중 최대 수치

const n = 3;
quantities = [2, 10, 6];
// Output: 7
// Explanation: One optimal way is:
// - The 11 products of type 0 are distributed to the first four stores in these amounts: 2, 3, 3, 3
// - The 6 products of type 1 are distributed to the other two stores in these amounts: 3, 3
// The maximum number of products given to any store is max(2, 3, 3, 3, 3, 3) = 3.

// 각 요소의 크기에 비례해서 n을 나눠서 가져가야함.
// 가져가서 만든 상품 최소 값 = quantity / n * (quantity/quantities)
var minimizedMaximum = function (n, quantities) {
  let left = 1;
  let right = Math.max(...quantities);

  const isProduct = (max) => {
    let count = 0;
    for (const quantity of quantities) {
      count += Math.ceil(quantity / max);
      if (n < count) return false;
    }
    return true;
  };

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (isProduct(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(minimizedMaximum(n, quantities));
