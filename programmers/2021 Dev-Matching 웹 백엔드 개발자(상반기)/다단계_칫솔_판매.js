// 조직원들 각자의 수익이 얼마인지

const a = 1,
  enroll = ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
  referral = ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
  seller = ["young", "john", "tod", "emily", "mary"],
  amount = [12, 4, 2, 5, 10];
// OutPut: [360, 958, 108, 0, 450, 18, 180, 1080]
// 수익 10% 해서 1미만이면 상급자에게 공납안함.
// 민호에게 바치는 돈은 계산해야함 수익 10% 뗴서 해야하니

// 키 값에 돈주는 자, 밸류에 받는 자
function solution(enroll, referral, seller, amount) {
  const organization = {};
  const property = {};

  for (let i = 0; i < referral.length; i++) {
    property[enroll[i]] = 0;
    organization[enroll[i]] = referral[i] === "-" ? 0 : referral[i];
  }

  for (let i = 0; i < amount.length; i++) {
    let income = amount[i] * 100;
    let senior = seller[i];

    while (senior) {
      const repayment = Math.floor(income / 10);
      income -= repayment;
      property[senior] += income;

      if (repayment < 1) break;
      senior = organization[senior];
      income = repayment;
    }
  }

  return Object.values(property);
}

console.log(solution(enroll, referral, seller, amount));
