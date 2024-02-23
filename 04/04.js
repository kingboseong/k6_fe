// const handleClick = () => {
//     const randomNum = Math.floor(Math.random() * 6 + 1);
//     console.log(randomNum)
//     document.querySelector("result").innerHTML(img)
// }

document.addEventListener("DOMContentLoaded", () => {

    // 버튼 가져오기    "#bt1" = "div > button"
    const bt1 = document.querySelector("#bt1"); 

    //버튼 이벤트 달기
    // bt1.addEventListener("click", () => {
    //     handleClick();
    // })
})

// 버튼을 누를 때 마다 { //여기// } 가 실행됨.
const handleClick = () => {  
    const n = Math.floor(Math.random() * 6)+1 ;
    const m = Math.floor(Math.random() * 6)+1 ;
    const o = Math.floor(Math.random() * 6)+1 ;
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    const img3= document.querySelector("#img3");
    img1.setAttribute("src", `./img/${n}.png`)
    img2.setAttribute("src", `./img/${m}.png`)
    img3.setAttribute("src", `./img/${o}.png`)
    console.log("click", n)
    console.log("click", m)
    console.log("click", o)
}