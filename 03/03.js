// alert("안녕하세요")

/* 
    함수 작성 2 : 화살표 함수
    ret = 변수
    const = 상수
 */ function handleClick(n) {
    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n} 이 눌러졌습니다.</h2>`;
}


/* 
    함수 작성 1 : 
 */
// function handleClick(n){
//     메세지 영역 가져오기1
//     document.getElementById("msgArea").innerHTML = "안녕하세요";

//     메세지 영역 가져오기2
//     document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다.</h2>";

//     메세지 영역 가져오기3
//     document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n} 이 눌러졌습니다.</h2>`;
// }