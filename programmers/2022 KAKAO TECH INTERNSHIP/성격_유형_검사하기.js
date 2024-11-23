// 짭 MBTI

const survey = ["TR", "RT", "TR"],
  choices = [7, 1, 3];
// Output = "TCMA"
// 1번 지표	라이언형(R), 튜브형(T)
// 2번 지표	콘형(C), 프로도형(F)
// 3번 지표	제이지형(J), 무지형(M)
// 4번 지표	어피치형(A), 네오형(N)

// 매우 비동의	네오형 3점
// 비동의	    네오형 2점
// 약간 비동의	네오형 1점
// 모르겠음	    어떤 성격 유형도 점수를 얻지 않습니다
// 약간 동의    	어피치형 1점
// 동의	        어피치형 2점
// 매우 동의	    어피치형 3점
// 동일한 점수일 경우 사전순으로
// AN 이면 A가 동의쪽 N이 비동의 쪽임
// 1 ≤ choices의 원소 ≤ 7

// mbti 점수 저장할 객체, 읽기 전용의 객체 필요
// 반전이면 8-choice choice가 4면 반전안해도됨.
// 걍 합쳐라

function solution(survey, choices) {
  const preview = [null, 3, 2, 1, 0, -1, -2, -3];
  const mind = {
    T: "R",
    F: "C",
    M: "J",
    N: "A",
  };
  const scores = {};

  for (let i = 0; i < survey.length; ++i) {
    const [type1, type2] = survey[i];
    const score = preview[choices[i]];

    if (score > 0) {
      scores[type1] = (scores[type1] || 0) + score;
    } else if (score < 0) {
      scores[type2] = (scores[type2] || 0) - score;
    }
  }

  let result = "";
  for (const m in mind) {
    if (scores[m] === undefined || scores[m] <= (scores[mind[m]] || 0))
      result += mind[m];
    else result += m;
  }

  return result;
}

console.log(solution(survey, choices));
// const obj = {
//   a: 1,
// };
// const h = obj.b === undefined ? 1 : 2;
// console.log(obj.a);
