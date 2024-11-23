// 박스 우로 90도 돌렸을 때 중력에 의해 변한 돌의 위치

const box = [
  ["#", ".", "*", "."],
  ["#", "#", "*", "."],
];
// Output:
//    [[".","#","#"],
//     [".","#","#"],
//     ["#","#","*"],
//     ["#","*","."],
//     ["#",".","*"],
//     ["#",".","."]]

// bfs
// 벽 만나기 전에 바위 개수 저장해놓고 벽 만나면 저장되면 바위를 벽-1인덱스 부터 쭈욱 다박음. 왼쪽으로 가면서
// 바위의 개수를 다소모하면 그후에 탐색하는 인덱스에 바위가 있으면 빈공간으로 바꿔줘야함.
var rotateTheBox = function (box) {
  const result = Array.from({ length: box[0].length }, () =>
    new Array(box.length).fill(0),
  );

  for (let i = 0; i < box.length; i++) {
    let stone = 0;
    let lastWall = 0;
    for (let j = 0; j < box[0].length; j++) {
      if (box[i][j] === "#") stone++;

      let k = j;
      while ((box[i][j] === "*" || j === box[0].length - 1) && k >= 0) {
        if (stone <= 0 && box[i][k] === "#") {
          box[i][k] = ".";
        } else if (stone > 0 && box[i][k] !== "*") {
          box[i][k] = "#";
          stone--;
        }

        if (k === lastWall) {
          stone = 0;
          lastWall = j;
          break;
        }
        k--;
      }
    }
  }

  for (let i = 0; i < box.length; i++) {
    const y = box.length - i - 1;
    for (let j = 0; j < box[0].length; j++) {
      result[j][y] = box[i][j];
    }
  }

  return result;
};

// var rotateTheBox = function (box) {
//     let m = box.length
//     let n = box[0].length
//     let rotatedBox = Array.from( {length : n}, (()=>Array(m).fill('.')))
//
//     for (let i = 0; i < m; i++){
//         let currentIndex = n - 1;
//
//         for (let j = n - 1; j >= 0; j--){
//             let val = box[i][j]
//
//             if (val === '.') continue;
//             if (val === '*') currentIndex = j;
//
//             rotatedBox[currentIndex][m-1-i] = val;
//             currentIndex--;
//         }
//     }
//
//     return rotatedBox;
// };

console.log(rotateTheBox(box));
