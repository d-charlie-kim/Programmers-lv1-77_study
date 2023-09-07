// [문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12950)

/* 문제 설명 */
/* 
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

제한사항
- 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
*/

function solution(arr1, arr2) {
  let answer = [];
  for (let i in arr1) {
    let row = [];
    for (let j in arr1[i]) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(row);
  }
  return answer;
}

function solution(arr1, arr2) {
  return arr1.map((row, i) => row.map((num, j) => num + arr2[i][j]));
}
