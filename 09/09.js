//자바스크립트 데이터 타입
//기본 타입
let n1 = 10; //정수
let n2 = 10.5; //실수
let s1 = "안녕하세요."; //문자열

// console.log("정수 : ", n1);
// console.log("실수 : ", n2);
// console.log("문자열 : ", s1);
// console.log("문자열 : ", s1[5]);

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



//arr1 만들기
let arr1 = [0, 0, 0, 0, 0, 0];
console.log("arr1 = ", arr1)

for (let i in arr1) {
  arr1[i] = arr[i]
}
console.log("반복문 첨자로 arr1= ", arr1)

//arr2 만들기
let arr2 = [];  //let arr2; =  undefined = fales / let arr2 = []; true
console.log("arr2 = ", arr2)

//반복문으로
for (let item of arr) {
  arr2.push(item);  // arr2에 item을 푸쉬했음. // python의 append가 js의 push
}
console.log("반복문으로 arr2= ", arr2)

//배열 map함수 반드시 이해.
// console.log("배열 map함수")
// arr2 = arr.map(() => {
//   let s = v + '😍';
//   console.log(v,',',s);
//   return s;
// }); // 배열을 사용하면 map함수를 쓸 수가 있음. ()(괄호안에 인수는 (콜백)함수(()=>{})가 들어감)
//배열의 메소드 - 인수로 콜백함수를 가짐 - map은 배열하고 동일한 개수가 출력됨.(return개수는 동일함>>>)
//map = 배열을 하나씩 출력시켜주는 함수
arr2 = arr.map((v, i) => {
  console.log("map의 v :", v) //배열의 요소 출력
  console.log("map의 i :", i) //각 배열요소의 인덱스 값이 출력
  return v + "💕";
});
console.log("arr2 : ", arr2);

//콜백의 인수, 파라미터가 1개인 경우는 () 생략 가능
//콜백의 body에 실행문이 없고 return'만' 있으면 {}와 return 생략 가능
console.log("배열 map함수 : 콜백");
arr2 = arr.map(v => v + '❤️'); //arr2를 위 아래에서 중복으로 썻기 때문에 위 arr2 앞에 let이 들어가야 함.
console.log("arr2 : ", arr2);
arr2 = arr.map((v, i) => v + '❤️' + i); //배열의 값에 index까지 가져온 경우.
console.log("arr2 : ", arr2);

//filter
let arr21 = [];
for (let item of arr) {
  if (isNaN(item)) arr21.push(item); // isNaN = 문자열이면 true / !inNaN 이면 숫자만 출력
}
console.log("반복문 필터 Filter arr21 = ", arr21);

arr21 = arr.filter(v => isNaN(v)) //isNaN은 true, false 만 확인시켜 준다. 이 중 true인 것들만 filter 함수가 골라줌!!!
console.log("Filter arr21 = ", arr21);

//전개연산자 arr를 똑같이 복사하고 싶으면 사용. (많이 사용)
let arr22 = [...arr];
console.log("전개연산자 : ",arr22)



//오브젝트 =(key와 값의 쌍으로 이루어져 있음.)/ json타입과 관련있음. / 결과값을 중괄호{}로 열고 닫음, 안에 값들은 대괄호[], []를 썼기 때문에 map함수 사용 가능.
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

//구조분할 = 배열 내 키와 값을 나눠서 가져옴?
for (let [k, v] of Object.entries(obj)) {
  console.log("오브젝트 키 : ", k);
  console.log("오브젝트 값 : ", v);
}

console.log("오브젝트 키배열 : ", Object.keys(obj));
let arr3 = Object.keys(obj).map(k => k + obj[k]);
console.log("arr3 : ",arr3);
