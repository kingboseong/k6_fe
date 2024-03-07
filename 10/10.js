document.addEventListener("DOMContentLoaded", () => {
  const randomnum = document.querySelector("#num")

  bt.addEventListener("click", () => {
    

    let n = [];
    let flag = false;


    if (!flag) {
      n = Math.floor(Math.random() * 45) + 1 //1~45
      console.log("n=", n)
      flag = true;
    }
  })
});

