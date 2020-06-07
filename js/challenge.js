document.addEventListener("DOMContentLoaded", function () { 
const counter = document.getElementById('counter');
const likes = document.querySelector(".likes");
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const submitBtn = document.querySelector('#submit');
const list = document.querySelector('#list');
const comment = document.getElementById('comment-input');
let seconds = 0;
   
//    As a user, I should see the timer increment every second once the page has loaded.

let timer = setInterval(countUp, 1000);

   function countUp () {
        seconds += 1
        counter.innerText = seconds;   
   }

//    As a user, I can manually increment and decrement the counter using the plus and minus buttons.
function addSecond() {
    plus.addEventListener("click", function() {
        seconds += 1
        counter.innerText = seconds;
    });
}

function subtractSecond() {
minus.addEventListener("click", function() {
    if (seconds > 0) {
        seconds -= 1
        counter.innerText = seconds;
    }
})
}

// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

let numOfLikes
let likeList

function addLike() {
  heart.addEventListener("click", function () {
    if (!document.getElementById(`${counter.innerText}`)) {
      likeList = document.createElement("li");
      likes.appendChild(likeList);
      numOfLikes = 1
      likeList.id = counter.innerText
      likeList.innerHTML = `${counter.innerText} has ${numOfLikes} like`;
    } else {
        numOfLikes++
      likeList.innerHTML = `${counter.innerText} has ${numOfLikes} likes`;
    }
  });
}


// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons.

function pauseTimer () {
pause.addEventListener("click", function() {    
    if (pause.innerText == "pause") {
        clearInterval(timer)
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        pause.innerText = "resume";
    } else {
        timer = setInterval(countUp, 1000);
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        pause.innerText = "pause";
    }
});
}


// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
function leaveComment () {
    submitBtn.addEventListener("click", function () {
        let myComment = document.createElement("li");
        list.appendChild(myComment);
        myComment.innerText = comment.value
        event.preventDefault();
    })


}



pauseTimer();
addSecond();
subtractSecond();
leaveComment();
addLike();


});