let timer = document.querySelector("#counter")
let count = parseInt(timer.innerText)
let counterChange;
let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let heart = document.querySelector("#heart")
let list = document.querySelector("ul")
let i
let like
let pause = document.querySelector("#pause")
let comments = document.querySelector("#list")
let submit = document.querySelector("#submit")

function addCount() {
    count ++
    timer.innerText = count
}

function subtractCount() {
    count --
    timer.innerText = count
}

function incrementCounter() {
    counterChange = setInterval(addCount, 1000);
}

function stopCounter() {
    clearInterval(counterChange)
}

plus.addEventListener("click", addCount)
minus.addEventListener("click", subtractCount)

heart.addEventListener("click", function() {
    if (!document.getElementById(`${count}`)) {
        i = 1
        like = document.createElement("li")
        like.id = `${count}`
        like.innerText = `${count} has been liked ${i} time`
        list.appendChild(like)
    } else {
        i ++ 
        like.innerText = `${count} has been liked ${i} times`
    }
});

let options = [plus, minus, heart, submit]

pause.addEventListener("click", function() {
    if (pause.innerText == "pause") {
        stopCounter();
        pause.innerText = "resume"
        for (let j = 0; j < options.length; j++) {
            options[j].disabled = true
        }
    }   else {
        incrementCounter();
        pause.innerText = "pause"
        for (let j = 0; j < options.length; j++) {
            options[j].disabled = false
        }
    }
});

submit.addEventListener("click", function(event) {
    event.preventDefault();
    let comment = document.createElement("p")
    let input = document.querySelector("#comment-input")
    comment.innerText = input.value
    comments.appendChild(comment)
    input.value = ""
})

incrementCounter();