let scoreCard = JSON.parse(localStorage.getItem('score')) || {
  Won: 0,
  Lost: 0,
  Tie: 0
};

updateScoreElement();

function playGame(userMove){
  const computerMove = pickComputerMove();
  let result = '';
  if(userMove === computerMove)
    result = 'It is a tie.';

  else if(userMove === 'rock'){
    if(computerMove === 'paper')
      result = 'You Lose.';

    else if(computerMove === 'scissors')
      result = 'You Win.';          
  }

  else if(userMove === 'paper'){
    if(computerMove === 'scissors')
      result = 'You Lose.';

    else if(computerMove === 'rock')
      result = 'You Win.';
  }

  else if(userMove === 'scissors'){
    if(computerMove === 'rock')
      result = 'You Lose.';

    else if(computerMove === 'paper')
      result = 'You Win.';
  }

  if(result === 'It is a tie.')
    scoreCard.Tie++;
  else if(result === 'You Win.')
    scoreCard.Won++;
  else if(result === 'You Lose.')
    scoreCard.Lost++;
  
  localStorage.setItem('score', JSON.stringify(scoreCard));

  document.querySelector('.js-result').innerHTML = `${result}`;

  document.querySelector('.js-moves').innerHTML = `You  <img src="images/${userMove}-emoji.png"
    class="button-image"> : 
    <img src="images/${computerMove}-emoji.png" class="button-image">  Computer`;

  updateScoreElement();
}

function updateScoreElement(){
  const scoreElem = document.querySelector('.js-score').innerHTML = `Won: ${scoreCard.Won}, Lost: ${scoreCard.Lost}, Ties: ${scoreCard.Tie}`;
}

function pickComputerMove(){
  const random = Math.random();
  let computerMove = '';
  if(random >= 0 && random < 1/3){
    computerMove = 'rock';
  }
  else if(random >= 1/3 && random < 2/3){
    computerMove = 'paper';
  }
  else if(random >= 2/3){
    computerMove = 'scissors'
  }
  return computerMove;
}