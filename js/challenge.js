const h1 = document.querySelector("#counter")
let start = parseInt(h1.textContent)

let pauseBtn = document.querySelector("#pause")
const minusBtn = document.querySelector("#minus")
const plusBtn = document.querySelector("#plus")
let pause = false


// add DOMCOntentLoaded event
document.addEventListener("DOMContentLoaded", ()=> {
    if (!pause) {
        startCount();
    }
    handleMinus();
    handlePlus();
})


// handle plus and minus btn
function handleMinus() {
    minusBtn.addEventListener(("click"), () => {
        start -= 1
        h1.textContent = start
        console.log(h1.textContent)
    })
}

function handlePlus() {
    plusBtn.addEventListener(("click"), () => {
        start += 1
        h1.textContent = start
        console.log(h1.textContent)
    })
}


function startCount() {
    setInterval(function () {
        start += 1;
        h1.textContent = start
        console.log(h1.textContent)
    }, 1000)
    console.log(h1.textContent)
}
