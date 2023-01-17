let pause = false
const h1 = document.querySelector("#counter")
let start = 0


setInterval(function () {
    start += 1;
    h1.textContent = start
}, 1000)

