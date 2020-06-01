const counter = document.getElementById('counter')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const heartBtn = document.getElementById('heart')
const pauseBtn = document.getElementById('pause')
const submitBtn = document.getElementById('submit')
const buttons = document.body.querySelectorAll('button')
const comments = document.getElementById('list')
const commentForm = document.getElementById('comment-form')

//auto-incrementing counter
    function autoIncrementCount(){
        let num = parseInt(counter.innerText)
        counter.innerText = num + 1
    }

    function timer(){
            interval = setInterval(autoIncrementCount, 1000)
    }

    function stopTimer(){
        clearInterval(interval)
    }
//Event Listeners
    function plusButton(){
        plusBtn.addEventListener('click', handleIncrement)
    }

    function minusButton(){
        minusBtn.addEventListener('click', handleDecrement)
    }

    function pauseButton(){
        pauseBtn.addEventListener('click', handlePause)
    }

    function submitButton(){
        submitBtn.addEventListener('click', (e) => {handleSubmit(e)})
    }

    function heartButton(){
        heartBtn.addEventListener('click', handleLikes)
    }

//Event Handlers
    function handleIncrement(){
        counter.innerText++
    }

    function handleDecrement(){
        let num = parseInt(counter.innerText)
        counter.innerText--
    }

    function handlePause(e){
        switch(e.target.innerText){
            case 'pause':
                stopTimer()
                for (let button of buttons){
                    if (button.id != 'pause'){ button.disabled = true }
                    } 
                    e.target.innerText = 'resume'
            break;
            case 'resume':
                timer()   
                for (let button of buttons){ button.disabled = false }
                    e.target.innerText = 'pause'
                    
        }  
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.form.elements[0].value)
        let p = document.createElement('p')
        p.innerText = `User: ${e.target.form.elements[0].value}`
        comments.appendChild(p)
        commentForm.reset()
    }

    function handleLikes(){
        let ul = document.body.querySelector('.likes')
        let li = document.createElement('li')
        li.id = `${counter.innerText}`
        let createdLi = document.getElementById(`${counter.innerText}`)
        createdLi ? createdLi.children[0].innerText++ : li.innerHTML = `${counter.innerText} has been liked <span>1</span> times`
        if (li.innerText){ ul.appendChild(li) }
    }


timer()
plusButton()
minusButton()
pauseButton()
heartButton()
submitButton()