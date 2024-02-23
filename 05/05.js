// document.addEventListener("DOMContentLoaded", () => {
//     // All하면 전부 나옴
// const bts = document.querySelectorAll("img");

//     // console.log(bts)

//     bts.forEach((item) => {
//         console.log(item)
//     })
// })

const handleClick = () => {  
    const bts = document.querySelectorAll("img");

    bts.forEach((item) => {
    const n = Math.floor(Math.random() * 6)+1 ;
    item.setAttribute("src", `./img/${n}.png`);

    console.log("click", n)
    });
}