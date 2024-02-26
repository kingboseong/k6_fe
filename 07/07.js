const handleChange =(s1, s2, lb1, lb2) => {
    if(s1.value === "℃") {
        s2.value ="Ｆ" 
        lb1.innerHTML = "℃" 
        lb2.innerHTML = "Ｆ" 
    }else{
        s2.value = "℃"
        lb1.innerHTML = "Ｆ"
        lb2.innerHTML = "℃"  
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const sel1 =document.querySelector("#sel1")
    const sel2 =document.querySelector("#sel2")

    const txt1 =document.querySelector("#txt1")
    const txt2 =document.querySelector("#txt2")

    const labels = document.querySelectorAll("label")
    
    txt1.addEventListener("change", () => {
        console.log(txt1.value)
        if(sel1.value === "℃" ){
            //섭씨온도를 화씨온도로
            txt2.value = (txt1.value * (9/5)) + 32;
        }else{
            //화씨온도를 섭씨온도로
            txt2.value = (txt1.value - 32) * (5/9);

        }
    })


    sel1.addEventListener("change", ()=>{
        handleChange(sel1, sel2, labels[0], labels[1])
    })
    //form의 값은 .value로 가지고 온다.
    sel1.addEventListener("change", ()=>{
        handleChange(sel2, sel1, labels[1], labels[0])
    })

})