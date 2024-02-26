// document.addEventListener("DOMContentLoaded", () => {
//     // All하면 1개든 10개든 배열 구조로 해서 전부 나옴.
// const bts = document.querySelectorAll("img");

//     // console.log(bts)

//     bts.forEach((item) => {
//         console.log(item)
//     })
// })

const handleClick = () => {  
    const bts = document.querySelectorAll("section > div > img");
    const btsNum = [1,2,3] ;

    //for of
    // for(let[idx, bt ] of bts.entries()){
    //     const n = Math.floor(Math.random() * 6)+1 ;
    //     bt.setAttribute("src", `./img/${n}.png`); 
    //     btsNum[idx] = n;

    //     console.log(btsNum)
    // }

    //for of => 파이썬의 for in
    for(let bt of bts){
        const n = Math.floor(Math.random() * 6)+1 ;
        bt.setAttribute("src", `./img/${n}.png`); 
    }

    //for in
    // for(let i in bts){
    //     const n = Math.floor(Math.random() * 6)+1 ;
    //     bts[i].setAttribute("src", `./img/${n}.png`); 
        
    //     console.log("fir in i=",i)
    // }

    //기본 for
    // for(let i = 0; i < bts.length; i++){
    //     const n = Math.floor(Math.random() * 6)+1 ;
    //     bts[i].setAttribute("src", `./img/${n}.png`); 
    // }


    // bts.forEach((item) => {
    // const n = Math.floor(Math.random() * 6)+1 ;
    // item.setAttribute("src", `./img/${n}.png`);

    // console.log("click", n)
    // });
}