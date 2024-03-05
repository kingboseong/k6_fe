//자바스크립트 데이터 타입
//기본 타입
let n1 = 10; //정수
let n2 = 10.5; //실수
let s1 = "안녕하세요"; //문자열

console.log("정수 : ", n1);
console.log("실수 : ", n2);
console.log("문자열 : ", s1);
console.log("문자열 : ", s1[4]);
//문자열 순회
for (let i of s1) {
  console.log("문자열 : ", s1[i]);
}
for (let c in s1) {
  console.log("문자열 : ", c);
}

//배열
let arr = ['🍕', 1, '👍', 2, '😁', 3];
console.log("배열 : ", arr);
console.log("배열의 요소 접근 :", arr[1]);

//배열 순회
console.log("배열 for in")
for (let c in arr) {
  console.log("배열 : ", c);
}
console.log("배열 for of")
for (let i of arr) {
  console.log("배열: ", arr[i]);
}

//배열 map함수 반드시 이해.
console.log("배열 map함수")
//배열의 메소드 - 인수로 콜백함수를 가짐 - map은 배열하고 동일한 개수가 출력됨.(return개수는 동일함>>>)
//map = 배열을 하나씩 출력시켜주는 함수
let arr2 = arr.map((v, i) => {
  console.log("map의 v :", v) //배열의 요소 출력
  console.log("map의 i :", i) //각 배열요소의 인덱스 값이 출력
  return v+"💕";
});
console.log("arr2 : ",arr2);

//콜백의 인수가 1개인 경우는 () 생략 가능
//콜백의 body에 실행문이 없고 return문만 있으면 {}와 return 생략 가능
console.log("배열 map함수 : 콜백");
arr2 = arr.map(v =>  v+'❤️'); //arr2를 위 아래에서 중복으로 썻기 때문에 위 arr2 앞에 let이 들어가야 함.
console.log("arr2 : ", arr2);
arr2 = arr.map((v,i) =>  v+'❤️'+i); //index 까지 포함.
console.log("arr2 : ", arr2);




//오브젝트
let obj = { '🍕': 1, '👍': 2, '😁': 3 };
console.log("오브젝트 : ", obj);
console.log("오브젝트 요소 접근 :", obj['🍕']);

//오브젝트 순회
console.log("오브젝트 for of")
for (let c of Object.entries(obj)) {
  console.log("오브젝트 : ", c);
  console.log("오브젝트 키 : ", c[0]);
  console.log("오브젝트 값 : ", c[1]);
}
for (let [k, v] of Object.entries(obj)) {
  console.log("오브젝트 키 : ", k);
  console.log("오브젝트 값 : ", v);
}
console.log("오브젝트 for in")
for (let i in obj) {
  console.log("오브젝트: ", obj[i]);
}