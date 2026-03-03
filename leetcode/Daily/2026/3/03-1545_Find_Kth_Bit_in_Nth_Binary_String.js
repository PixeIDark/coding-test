// "0"
// "0" + "1" + {reverse("0") => "1"} = "011"
// "011" + "1" + {reverse("011") => invert("110") => "001"} = "0111001"
// 1 => 3 => 7 => 15
// 2 + 4 + 8 + 16, 2^n의 증가량
// S의 길이가 k이상이면 즉시 반환
// 14분
var findKthBit = function (n, k) {
  const converter = (bit) => {
    const reversedArr = bit.split("").reverse();
    const invertedArr = reversedArr.map((char) => char === "0" ? "1" : "0");

    return invertedArr.join("");
  };

  let str = "0";

  for (let i = 1; i <= n; i++) {
    if (str.length >= k) return str[k - 1];

    const addStr = converter(str);
    str = str + "1" + addStr;
  }

  return str[k - 1];
};