document.addEventListener("DOMContentLoaded", function () {
  const plusButton = document.getElementById("plus");
  const minusButton = document.getElementById("minus");
  const counter = document.getElementById("counter");
  const heartButton = document.getElementById("heart");
  let pauseButton = document.getElementById("pause");
  const likes = document.querySelector(".likes");
  let seconds = window.setInterval(timer, 1000);
  const form = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");
  const submitButton = document.getElementById("submit");
  const commentList = document.getElementById("list");
  let paused = false

  function timer() {
      console.log("timer running")
    counter.innerText++;
  }

  function pauseTimer() {
    pauseButton.addEventListener("click", function () { 
        if (!paused) {
      window.clearInterval(seconds);
      plusButton.disabled = true;
      minusButton.disabled = true;
      heartButton.disabled = true;
      pauseButton.innerHTML = "resume";
      paused = true
    }
    else {
        seconds = window.setInterval(timer, 1000);
        plusButton.disabled = false;
        minusButton.disabled = false;
        heartButton.disabled = false;
        pauseButton.innerHTML = "pause";
        paused = false
    }
    });
  }

//   function resumeTimer() {
//     pauseButton.addEventListener("click", function () {
//         if (pauseButton.innerHTML == "resume") {
//     seconds = window.setInterval(timer, 1000);
//       plusButton.disabled = false;
//       minusButton.disabled = false;
//       heartButton.disabled = false;
//     }});
//   }

  function addOne() {
    plusButton.addEventListener("click", function () {
      counter.innerText++;
    });
  }

  function subtractOne() {
    minusButton.addEventListener("click", function () {
      if (counter.innerText > 0) {
        counter.innerText--;
      }
    });
  }

  let numLikes
  let list
  
  function addLike() {
    heartButton.addEventListener("click", function () {
      if (!document.getElementById(`${counter.innerText}`)) {
        list = document.createElement("li");
        likes.appendChild(list);
        numLikes = 1
        list.id = counter.innerText
        list.innerHTML = `${counter.innerText} has ${numLikes} like`;
      } else {
          numLikes++
        list.innerHTML = `${counter.innerText} has ${numLikes} likes`;
      }
    });
  }

  function addComment() {
    submitButton.addEventListener("click", function (event) {
      let comment = document.createElement("li");
      commentList.appendChild(comment);
      comment.innerText = commentInput.value;
      event.preventDefault();
    });
  }

  seconds;
  addComment();
  addOne();
  subtractOne();
  addLike();
  pauseTimer();
  //resumeTimer();
});
