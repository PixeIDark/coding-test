// 숫자 코드를 문자로 변환
String.fromCharCode(97); // 'a'
String.fromCharCode(98); // 'b'
String.fromCharCode(122); // 'z'

// 여러 문자 동시에 변환 가능
String.fromCharCode(65, 66, 67); // 'ABC'

// 주요 ASCII 코드
// 97-122: 소문자 a-z
// 65-90: 대문자 A-Z
// 48-57: 숫자 0-9

let str = "abc";
str.charCodeAt(0); // 97 ('a'의 코드)
str.charCodeAt(1); // 98 ('b'의 코드)
str.charCodeAt(2); // 99 ('c'의 코드)

// 존재하지 않는 인덱스
str.charCodeAt(5); // NaN
