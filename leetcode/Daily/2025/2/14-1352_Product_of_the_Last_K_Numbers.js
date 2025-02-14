// 클래스 어케 잘 만들어봐라

// Input
//     ["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]
//     [[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]
// Output
//     [null,null,null,null,null,null,20,40,0,null,32]
// Explanation
// ProductOfNumbers productOfNumbers = new ProductOfNumbers();
// productOfNumbers.add(3);        // [3]
// productOfNumbers.add(0);        // [3,0]
// productOfNumbers.add(2);        // [3,0,2]
// productOfNumbers.add(5);        // [3,0,2,5]
// productOfNumbers.add(4);        // [3,0,2,5,4]
// productOfNumbers.getProduct(2); // return 20. The product of the last 2 numbers is 5 * 4 = 20
// productOfNumbers.getProduct(3); // return 40. The product of the last 3 numbers is 2 * 5 * 4 = 40
// productOfNumbers.getProduct(4); // return 0. The product of the last 4 numbers is 0 * 2 * 5 * 4 = 0
// productOfNumbers.add(8);        // [3,0,2,5,4,8]
// productOfNumbers.getProduct(2); // return 32. The product of the last 2 numbers is 4 * 8 = 32

// n 까지의 곱을 만들고, k가 들어오면, n 까지의 곱을 n-k 까지의 곱으로 나눠줘. 0 이 문제임
// [0, 1, 2, 3, 4] n = 4 k = 3
// 24가 나와야하는데, n 까지의 곱이 0 이고 , n-k 까지의 곱이 0임..
// 그렇다면 요소가 0 인경우 곱을 생략해보자
// [4, 3, 2, 1, 0, 2, 3] n = 4 k = 2
// 0이 나와야함. 24 24 나누면 1 뜸.
// 인덱스 길이에 가장 가까운 0 의 위치를 기억해 두고, length - 1 - k 보다 0 인덱스 값이 높으면 0 반환
var ProductOfNumbers = function () {
  this.dp = [];
  this.zeroIdx = -1;
};

ProductOfNumbers.prototype.add = function (num) {
  if (this.dp.length === 0) {
    if (num === 0) {
      this.dp.push(BigInt(1));
      this.zeroIdx = this.dp.length - 1;
    } else this.dp.push(BigInt(num));

    return;
  }

  if (num === 0) {
    this.dp.push(this.dp[this.dp.length - 1]);
    this.zeroIdx = this.dp.length - 1;
  } else this.dp.push(BigInt(num) * this.dp[this.dp.length - 1]);
};

ProductOfNumbers.prototype.getProduct = function (k) {
  const n = this.dp.length - 1;
  if (n - k < this.zeroIdx) return 0;
  if (n - k < 0) return Number(this.dp[n]);
  return Number(this.dp[n] / this.dp[n - k]);
};
// [[],[3],[0],[2],[5],[4],[2],[3],[4],[8],[2]]
// ["ProductOfNumbers","add","add","add","add","add","getProduct","getProduct","getProduct","add","getProduct"]
const v = new ProductOfNumbers();
v.add(3);
v.add(0);
v.add(2);
v.add(5);
v.add(4);
console.log(v.getProduct(2));
console.log(v);
