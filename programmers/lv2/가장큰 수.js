// 첫째자리 큰 순으로 내림차 정렬, 첫째짜리가 같다면 길이가 짧은 순으로
// 첫째자리 같으면 긴쪽과 짧은쪽에서 인덱스 비교를 통해 다른얘가 나올때까지 비교
// 짧은쪽끝까지 같다면 긴쪽은 k 인덱스 값보다 작은게 튀어나오면 승자는 짧은쪽
// 무조건 최대길이인 4로 마지막 숫자를 기준으로 맞춰주자 길이를 그 후 비교
// 50분
function solution(numbers) {
  const result = numbers
    .map(String)
    .sort((a, b) => (b + a) - (a + b))
    .join("");

  return result[0] === "0" ? "0" : result;
}
