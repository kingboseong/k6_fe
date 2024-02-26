const handleChange = (s1, s2, lb1, lb2, t1, t2) => {
    if (s1.value === "℃") {
        s2.value = "Ｆ"  //input type(form 태그)를 가지고 올 떄
        lb1.innerHTML = "℃" // 일반 태그를 가지고 올 때
        lb2.innerHTML = "Ｆ"
    } else {
        s2.value = "℃"
        lb1.innerHTML = "Ｆ"
        lb2.innerHTML = "℃"
    }

    t1.value = "";
    t1.focus();
    t2.value = "";
}


//Domtree 완성 후 작성
document.addEventListener("DOMContentLoaded", () => {
    //html(select)에서 찝어내고 싶은 것들 찝어냄
    //querySelector 함수명, 돔트리에 있는 select를 찾아줌.
    const sel1 = document.querySelector("#sel1")
    const sel2 = document.querySelector("#sel2")

    const txt1 = document.querySelector("#txt1")
    const txt2 = document.querySelector("#txt2")

    const labels = document.querySelectorAll("label")


    //select박스에 이벤트를 발생하도록 만듦(addeventListener)
    txt1.addEventListener("input", () => {
        console.log(txt1.value)
        if (sel1.value === "℃") {
            //섭씨온도를 화씨온도로
            txt2.value = (parseFloat(txt1.value) * (9 / 5)) + 32;
        } else {
            //화씨온도를 섭씨온도로
            txt2.value = (parseFloat(txt1.value) - 32) * (5 / 9);

        }
    })

    sel1.addEventListener("change", () => {
        handleChange(sel1, sel2, labels[0], labels[1], txt1, txt2)
    })
    //form의 값은 .value로 가지고 온다.
    sel1.addEventListener("change", () => {
        handleChange(sel2, sel1, labels[1], labels[0], txt1, txt2)
    })

})