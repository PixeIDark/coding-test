// 불량 사용자 목록 경우의 수  아이디 목록 순서와 상관없이 내용이 동일하면 같은 경우의 수

const v = 1,
  user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"],
  banned_id = ["fr*d*", "abc1**"];
// OutPut: 3

// i 랑 마지막 이랑 스왑 후 pop
// j + i % i.length
// set에 원본 처넣고 컷당한 횟수 +1이 결과임!
// "fr*d*"  : "frodo", "fradi"
// "*rodo"  : "frodo", "crodo"
// "******" : "abc123", "frodoc"
// "******" : "abc123", "frodoc"

// 2로 해주고 하나씩만 적어
// user_id : [banned_id] 넣고 banned_id count: 에서 하나씩 빼
// arr = [banned_id...]
//

function solution(user_id, banned_id) {
  let result = 0;

  for (const user of user_id) {
    for (let i = 0; i < banned_id.length; i++) {
      if (
        user.length !== banned_id[i].length ||
        banned_id[i] === banned_id[i - 1]
      )
        continue;

      let isBanned = true;
      for (let j = 0; j < banned_id[i].length; j++) {
        if (banned_id[i][j] === "*") continue;

        if (banned_id[i][j] !== user[j]) {
          isBanned = false;
          break;
        }
      }

      if (isBanned) {
        result++;
      }
    }
  }

  return result + 1 - banned_id.length;
}

console.log(solution(user_id, banned_id));
