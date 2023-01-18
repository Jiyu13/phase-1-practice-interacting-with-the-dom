const h1 = document.querySelector("#counter")
let start = parseInt(h1.textContent)


let likesList = document.querySelector(".likes")
let likeBtn = document.querySelector("#heart")
let pauseBtn = document.querySelector("#pause")
const minusBtn = document.querySelector("#minus")
const plusBtn = document.querySelector("#plus")
let submitBtn = document.querySelector("#submit")

let isPaused = false


let check = startCount()
handleMinus();
handlePlus();


// handle pause counter
pauseBtn.addEventListener("click", () => {
    isPaused = !isPaused;
    clearInterval(check)
    pauseBtn.textContent = "resume"
    minusBtn.disabled = true
    plusBtn.disabled = true
    likeBtn.disabled = true
    submitBtn.disabled = true

})


// add event listener on "Like" btn
likeBtn.addEventListener("click", () => {
    let li = document.createElement("li")
    console.log(start)
    li.setAttribute("data-num",  start)
    li.textContent = `${start} has been liked 1 time `
    likesList .append(li)
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
    if (!isPaused) {
        return setInterval(function () {
            start += 1;
            h1.textContent = start
            console.log(h1.textContent)
        }, 1000)
    }
}
