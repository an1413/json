// JSON 데이터 객체와 문자열로 변환하기
// JSON.parse(), JSON.stringify() --> classify : 분류하다, 구분하다.

// [1] JSON.parse(jsonText) --> JSON 형식의 텍스트 --> 객체로 변환.
let jsonText = '{"name" : "홍길동","age":20,"nationality":"대한민국"}'; //objext
//'' 없으면 object!  , ''있으면 string
console.log("변환전--> " + typeof jsonText);   //String
console.log(jsonText.name); //String --> Object!!
const jsonObj = JSON.parse(jsonText);

console.log('--------------------------');
console.log(jsonObj.name);
console.log(jsonObj.age);
console.log(jsonObj.nationality);

console.log('이름과 나이는 ${jsonObj.name}(${jsonObj.age})이며, 국적은 ${jsonObj.nationality}이다.');

// [2] : JSON.stringify(dataObj) --> 데이터 객체를 --> JSON 형식의 텍스트로 변환.
console.log('--------------------------');
const jsonStr = JSON.stringify(jsonObj);
