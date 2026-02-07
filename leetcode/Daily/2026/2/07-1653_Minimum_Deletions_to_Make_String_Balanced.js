// 정확하진 않지만, b는 무조건 a보다 인덱스가 높아야하는데, 조건 충족하기위한 최소 삭제 횟수반환
// 앞 순회로 b개수 체크, 뒷 순회로 a개수 체크
// a인 경우 체크된 b개수 신경쓰고, b인 경우 체크된 a개수 생각
// "aababbab"
// 문제가 발생하는 지점 2(b)에서 조건 만족하려면 비용 2
// 다음 지점 3(a)에서 조건 만족하려면 비용 1, dp[i] = Math.min(현재조건, dp[i - 1])
// 다음 지점 6(a)에서 조건 만족하려면 비용 3
// 하... 걍 a 쭉 나오는게 정배고, b가 등장하고 a가나오게되면 둘 중 하나 제거하는게 국룰임
// bbba 의경우 이조건 충족했으니 둘중하나 삭제하면 a삭제해서 1개
// baaa 의경우도 조건 충족했으니 삭제하면 b 삭제해서 1개
// bbbaaa 는 3번 충족을해서 3개 삭제해야함 bbbaa 는 2개 삭제
// 25분
var minimumDeletions = function (s) {
  let result = 0;
  let count = 0;

  for (const char of s) {
    if (char === "b") {
      count++;
    } else if (count > 0) {
      result++;
      count--;
    }
  }

  return result;
};