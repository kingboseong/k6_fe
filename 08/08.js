document.addEventListener("DOMContentLoaded", () => {
    //DOM 생성후에 img, inputm, button 가져오기
    const upDownImg = document.querySelector("img");
    const numInput = document.getElementById("num1");
    const bt = document.querySelector("button");
    const msg = document.querySelector("#msg");

    //input focus
    numInput.focus();

    //랜덤 수 생성 변수
    let n;
    let flag = false;

    //버튼의 클릭이벤트 달기
    bt.addEventListener("click", (e) => {
        e.preventDefault();

        
        //input 박스 내용가져오기
        if (numInput.value < 1 ||numInput.value >100) {
            
            // alert("숫자를 입력하세요")
            msg.innerHTML = "<span>1에서 100까지 숫자만 입력하세요.</span>"
            numInput.focus();
            return;
        }
        
        //랜덤 수 생성
        if (!flag) {
            n = Math.floor(Math.random() * 100) + 1 //1~100
            console.log("n=", n)
            flag = true;

            //input 초기화
            numInput.style.display = "inline";
            numInput.value = "";
            numInput.focus();
            bt.innerHTML = "확인";
        }
        
        //숫자 비교
        msg.innerHTML = "";
        if (n === parseInt(numInput.value)) {
            upDownImg.setAttribute("src", "./img/good.png");
            numInput.style.display = "none";
            bt.innerHTML = "재시작";
            flag = false;


        } else if (n > numInput.value) {
            upDownImg.setAttribute("src", "./img/up.png");
        } else {
            upDownImg.setAttribute("src", "./img/down.png");
        }
    });
})