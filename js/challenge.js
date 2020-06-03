let counter_id = document.querySelector("#counter")
let minus_id = document.querySelector("#minus")
let plus_id = document.querySelector("#plus")
let heart_id = document.querySelector("#heart")
let pause_id = document.querySelector("#pause")
let likes = document.querySelector(".likes")

let game = true;

let counter = 0

//As a user, I should see the timer increment every second once the page has loaded.

let timer = setInterval(function(){
    if (game) {
    counter_id.innerHTML = counter
    counter +=1 ;
    }
}, 1000);

// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

minus_id.addEventListener("click", function(e){
    counter -= 1;
    counter_id.innerHTML = parseInt(counter_id.innerHTML) - 1;
})

plus_id.addEventListener("click", function(e){
    counter += 1;
    counter_id.innerHTML = parseInt(counter_id.innerHTML) + 1;
})

// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

heart_id.addEventListener("click", function(){
    if(document.getElementById(`Li${counter}`) == null) {
        let li = document.createElement('Li');
        li.setAttribute('id', `Li${counter}`)
        li.innerHTML = `${counter} have this many likes: 1`
        likes.appendChild(li)
    } else {
        let li = document.getElementById(`Li${counter}`)
        let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
        li.innerHTML = `${counter} have this many likes: ${splitted}`
        likes.appendChild(li)
    }
})

// pause the counter, disable all buttons except the pause button, the pause button should then show the text "resume"
pause_id.addEventListener("click", function(){
    if (game) {
        pause_id.innerHTML = "resume"
        game = false
    } else {
        pause_id.innerHTMl = "pause"
         game = true
    }
})

