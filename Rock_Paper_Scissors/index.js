const jsScores = document.querySelector('.js-scores') 
let jsResult = document.querySelector('.js-result')


let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScore()

function game(){ 
  const randomNumber = Math.floor(Math.random()*3);
  let computerMove = '';
  if(randomNumber >= 0 && randomNumber < 1){
    computerMove = "Rock";
  }else if(randomNumber >= 1 && randomNumber < 2){
    computerMove = "Paper";
  }else {
    computerMove = "Scissors";
  } 
  return computerMove;
}  

document.querySelector('.rock-btn').addEventListener('click', function() {
  playerGame('Rock')
})

document.querySelector('.paper-btn').addEventListener('click', function() {
  playerGame('Paper')
})

document.querySelector('.scissors-btn').addEventListener('click', function() {
  playerGame('Scissors')
})

function playerGame(playerMove){
  let computerPick = game();
  let result='';
  if(playerMove === 'Rock'){
    if(computerPick === 'Rock'){
      result = 'It\'s\ Tie';
    }else if(computerPick === 'Paper'){
      result = 'You lose';
    }else if(computerPick === 'Scissors'){
      result = 'You win';
    }

  }else if(playerMove === 'Paper'){
    if(computerPick === 'Rock'){
      result = 'You win';
    }else if(computerPick === 'Paper'){
      result = 'It\'s\ Tie';
    }else if(computerPick === 'Scissors'){
      result = 'You lose';
    }

  }else if(playerMove==='Scissors'){
    if(computerPick === 'Rock'){
      result = 'You lose';
    }else if(computerPick === 'Paper'){
      result = 'You win';
    }else if(computerPick === 'Scissors'){
      result = 'It\'s\ Tie';
    }
  }
  if(result === 'You win'){
    score.wins += 1
  }
  else if(result === 'You lose'){
    score.losses += 1
  }else if(result === 'It\'s\ Tie'){
    score.ties += 1
  }
  localStorage.setItem('score', JSON.stringify(score))
  updateScore()
  const jsMoves = document.querySelector('.js-moves')
  jsResult.innerText = `${result}.`
  jsMoves.innerHTML = `Your pick<img class="emoji-btn" src="Images/${playerMove}-emoji.png"> <img class="emoji-btn" src="Images/${computerPick}-emoji.png"> Computer's Pick`
}



function updateScore(){
  jsScores.innerText = (`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
}


function displayMessage(){
  
  document.querySelector('.display-msg').innerHTML =
  `<p>Are you sure you want to reset the score? 
  <button class="yes-btn">Yes</button>
  <button class="no-btn">No</button></p>`
  document.querySelector('.yes-btn').addEventListener('click', yesBtn)
  document.querySelector('.no-btn').addEventListener('click', noBtn)

}

function yesBtn() {
  reset()
  hideMessage()
}

function noBtn() {
  hideMessage()
}

function hideMessage(){
  document.querySelector('.display-msg').innerHTML = ''
}

function reset(){
  localStorage.removeItem('score')
  score = {
    wins:0,
    losses: 0,
    ties: 0
  }
  updateScore()
  hideMessage()
}

document.querySelector('.reset-btn').addEventListener('click', displayMessage)

let autoPlayBtn = document.querySelector('.auto-play')
let isAutoPlaying = false 
let intervalId


function autoPlay() {
  if(!isAutoPlaying){
      autoPlayBtn.innerText = 'Stop Play'
     intervalId = setInterval(function(){
      const playerMove =  game()
      playerGame(playerMove)
    }, 1000)
    isAutoPlaying = true
  }else {
    autoPlayBtn.innerText = 'Auto Play'
     clearInterval(intervalId)
     isAutoPlaying = false
  }
}

autoPlayBtn.addEventListener('click', autoPlay)

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'a'){
    autoPlay()
  }
})

