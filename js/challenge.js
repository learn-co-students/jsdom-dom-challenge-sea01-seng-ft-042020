let seconds = 0;
const el = document.getElementById('counter');
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const pause = document.getElementById("pause");
const heart = document.getElementById("heart");
const comments = document.getElementById("list");

let cancel = setInterval(incrementSeconds, 1000);

function incrementSeconds() {
    seconds += 1;
    el.innerText = seconds;
}

minus.addEventListener("click", function(){
    if (seconds > 0) {
        seconds -= 1;
        el.innerText = seconds;
    }
})

plus.addEventListener("click", function(){
    seconds += 1;
    el.innerText = seconds;
})

pause.addEventListener("click", function(){
    if (pause.innerText == "pause") {
        clearInterval(cancel)
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        pause.innerText = "resume"
    } else {
        cancel = setInterval(incrementSeconds, 1000);
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        pause.innerText = "pause"
    }
})

document.getElementById("comment-form").addEventListener("submit", function(event){
    event.preventDefault()  
    const ul = document.getElementById("comment-list")
    if (!ul){
        const ul = document.createElement("ul")
        ul.id = "comment-list"
        comments.appendChild(ul)
    }
    if (event.target.comment.value != ""){
        const li = document.createElement("li")
        li.innerText = event.target.comment.value
        ul.appendChild(li)
    }
})