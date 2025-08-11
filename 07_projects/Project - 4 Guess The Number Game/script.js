let randomNumb = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('.guessField');
const submit = document.querySelector('#subt');
const prevGuesses = document.querySelector('.guesses');
const remainGuesses = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrhi');
const msg = document.querySelector('.resultParas'); 

const p = document.createElement('p');

let numbGuess = 1
let prevGuess = []

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Enter a valid Number. ${guess}`);
    }else if(guess < 1){
        alert(`Enter a number between 1 to 100.`);
    }else if(guess > 100){
        alert(`Enter a number between 1 to 100.`);
    }else{
        prevGuess.push(guess);
        if(numbGuess === 10){
            updateGuess(guess);
            displayMessage(0,`Game Over. Random Number is ${randomNumb} :(`);
            endGame();
        }else{
            updateGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if(guess == randomNumb){
        displayMessage(1,`You Guessed it Correct, You are Win :)`);
        endGame();
    }else if(guess < randomNumb){
        displayMessage(3,`Number is too low.`)
    }else if(guess > randomNumb){
        displayMessage(0,`Number is too high.`)
    }
}

function updateGuess(guess) {
    userInput.value = '';           //IMP Line.
    prevGuesses.innerHTML += `${guess} `;
    numbGuess++;
    remainGuesses.innerHTML = `${11 - numbGuess}`;
}

function displayMessage(number,message) {
    if(number == 0){
        lowOrhi.innerHTML = `<h2 style="color: red;">${message}</h2>`;
    }
    else if(number == 3){
        lowOrhi.innerHTML = `<h2 style="color: blue;">${message}</h2>`;
    }
    else{
        lowOrhi.innerHTML = `<h2 style="color: green;">${message}</h2>`;
    }
    
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">NewGame</h2>`;
    msg.appendChild(p);
    playGame = false;
    startGame();

}

function startGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        lowOrhi.innerHTML = '';
        randomNumb = parseInt(Math.random() * 100 + 1);
        numbGuess = 1;
        prevGuess = [];
        prevGuesses.innerHTML = '';
        remainGuesses.innerHTML = `${11 - numbGuess}`;
        userInput.removeAttribute('disabled','');
        msg.removeChild(p);

        playGame = true;
    })
}