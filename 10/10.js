document.addEventListener("DOMContentLoaded", () => {
  const bt = document.querySelector("button")
  const numDisp = document.querySelector("#numDisp")

  let nums = []

  bt.addEventListener("click", () => {
    //배열 초기화
    // nums = []
    nums.length = 0

    //1~45까지 랜덤 수가 7개 만들기(중복 x)
    while (nums.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1
      if (!nums.includes(n))
        nums.push(n)
    }
    // 방법1
    // numDisp.innerHTML = "<span class = 'sp0'>1</span>"  * 7개 만들어도 됨.
    // 방법2
    // let tags = ''
    // nums.map((v, i) => {
    //   tags = tags + `<span class = "sp${parseInt(v / 10)}">${v}</span>`
    //   if (i === 5)
    //     tags = tags + `<span> + </span>`
    // })
    // numDisp.innerHTML = tags
    //방법3
    let tags = []
    tags = nums.map((v) =>
      `<span class = "sp${parseInt(v / 10)}">${v}</span>` // parseInt - 정수로 바꿔줌
    )
    tags.splice(6, 0, '<span>+</span>')
    numDisp.innerHTML = tags.toString().replaceAll(',', '') // replaceAll 제거해줌
  })

})