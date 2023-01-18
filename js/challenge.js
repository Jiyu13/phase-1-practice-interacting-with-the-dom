const h1 = document.querySelector("#counter")
let start = parseInt(h1.textContent)


let likesList = document.querySelector(".likes")
let likeBtn = document.querySelector("#heart")
let pauseBtn = document.querySelector("#pause")
const minusBtn = document.querySelector("#minus")
const plusBtn = document.querySelector("#plus")
let submitBtn = document.querySelector("#submit")
let commentForm = document.querySelector("#comment-form")
let commentList = document.querySelector("#list")

let isPaused = true
let isDisabled = true

let check = startCount()
handleMinus();
handlePlus();

// submit comment 
let ul = document.createElement("ul")
commentForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let input = commentForm.querySelector("#comment-input").value
    commentList.append(ul)

    let li = document.createElement("li")
    li.textContent = input
    ul.append(li)
    commentForm.reset()  // clear input after submit
})

// handle pause counter
pauseBtn.addEventListener("click", () => {
    if (isPaused) {
        clearInterval(check)
        pauseBtn.textContent = "resume"
        minusBtn.disabled = isDisabled
        plusBtn.disabled = isDisabled
        likeBtn.disabled = isDisabled
        submitBtn.disabled = isDisabled
        console.log(isPaused)
    } else {
        check = startCount() // reassign check to startCount() here to continue counting  
        pauseBtn.textContent = "pause"
        minusBtn.disabled = !isDisabled
        plusBtn.disabled = !isDisabled
        likeBtn.disabled = !isDisabled
        submitBtn.disabled = !isDisabled
        console.log(isPaused)
    }
    isPaused = !isPaused    
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
    return setInterval(function () {
        start += 1;
        h1.textContent = start
        console.log(start)
    }, 1000)
}
