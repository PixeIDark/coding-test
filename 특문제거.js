let 아직안끝낫어  = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
JSON.stringify("h");

// 아직안끝낫어
// /{/g, '[' => {를 [ 로 대체한다.
// JSON.parse        문자열 => 객체/배열
// JSON.stringify 객체/배열 => 문자열
