// 유효성 검증 함수 만들기
// code[i] = a-z + 0-9
// businessLine[i] = "electronics" "grocery" "pharmacy" "restaurant"
// 45분, 코테에서는 localeCompare 쓰지말고 등호로 비교하자
var validateCoupons = function (code, businessLine, isActive) {
  const validBusiness = ["electronics", "grocery", "pharmacy", "restaurant"];
  const validCode = [];

  const validateCode = (str) => {
    // Number(char) 로 NAN이 아니면 스킵
    // charCode 했을 시, 65 ~ 90, 97 ~ 122 인지 확인
    if (str === "") return false;

    for (const char of str) {
      if (!isNaN(Number(char)) || char === "_") continue;

      const charCode = char.charCodeAt(0);

      if (!(65 <= charCode && charCode <= 90) && !(97 <= charCode && charCode <= 122)) return false;
    }

    return true;
  };


  for (let i = 0; i < code.length; i++) {
    if (isActive[i] && validBusiness.includes(businessLine[i]) && validateCode(code[i])) {
      validCode.push([code[i], businessLine[i]]);
    }
  }

  validCode.sort((a, b) => {
    const orderA = validBusiness.indexOf(a[1]);
    const orderB = validBusiness.indexOf(b[1]);

    if (orderA !== orderB) return orderA - orderB;

    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  });

  const result = validCode.map(x => x[0]);

  return result;
};