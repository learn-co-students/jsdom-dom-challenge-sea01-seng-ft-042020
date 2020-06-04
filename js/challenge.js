let counterInt
let isPaused
// //get elements
const counter = document.getElementById("counter")
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const heartButton = document.getElementById("heart")
const pauseButton = document.getElementById("pause")


// incrementer
function tickClock (x) {
    counterInt = parseInt(counter.innerText, 10);
    counter.innerText = `${counterInt + x}`
};

// auto increments clock on 1 sec interval
setInterval(function(){if(!isPaused) {tickClock(1)}}, 1000)

plusButton.addEventListener("click", function(){if(!isPaused) {tickClock(1)}})
minusButton.addEventListener("click", function(){if(!isPaused) {tickClock(-1)}})
pauseButton.addEventListener("click", function() {
    isPaused = !isPaused;
    if(isPaused){pauseButton.innerText = "resume"} else{pauseButton.innerText = "pause"}
})