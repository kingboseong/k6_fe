// alert("안녕하세요")

//DOM tree가 완성된 후 실행 / 돔이 완성된 후 어디에 어떤 이펙트를 넣을 수 있을 정도먄 층분
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded ok")

    //버튼 생성
    const bt3 = document.createElement("button");
    const bt3Txt = document.createTextNode("버튼3");
    bt3.appendChild(bt3Txt);

    //버튼 생성
    const bt4 = document.createElement("button");
    const bt4Txt = document.createTextNode("버튼4");
    bt4.appendChild(bt4Txt);

    //버튼 추가하기
    document.querySelector("#btArea2").append(bt3);

    //버튼 추가하기
    document.querySelector("#btArea2").append(bt4);

    //버튼 이벤트 달기
    bt3.addEventListener("click", () => {
        handleClick(3);
    });

    //버튼 이벤트 달기
    bt4.addEventListener("click", () => {
        handleClick(4);
    });
});

/* 
    함수 작성 2 : 화살표 함수
    ret = 변수
    const = 상수
 */
const handleClick = (n) => {
    let msg;
    if (n == 1) msg = "<h2>안녕하세요.</h2>";
    else if (n == 2) msg = "<h2>안녕히 가세요</h2>";
    else msg = `<h2>버튼 ${n} 클릭<?h2>`;
    document.querySelector("#msgArea").innerHTML = msg;
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

