function gameRules(){
  let rule=document.getElementById('rule');
  if(rule.style.display==='block'){
    rule.style.display='none';
  }else{
    rule.style.display='block';
  }
}

let score={
  win:localStorage.getItem('win')?parseInt(localStorage.getItem('win')):0,
  lost:localStorage.getItem('lost')?parseInt(localStorage.getItem('lost')):0
};

function updateScoreDisplay(){
  document.querySelector('#dynamic-computer-won').innerText=score.lost;
  document.querySelector('#dynamic-user-won').innerText=score.win;
}
updateScoreDisplay();

function saveScore(){
  localStorage.setItem('win',score.win.toString());
  localStorage.setItem('lost',score.lost.toString());
}

function generateComputerChoice(){
  let randomNumber=Math.random()*3;
  if(randomNumber>0 && randomNumber<=1){
    return 'Rock';
  }else if(randomNumber>1 && randomNumber<=2){
    return 'Paper';
  }else{
    return 'Scissors';
  }
}
function getResult(userMove, computerMove){
  document.querySelector('#circlenone').style.display = 'none';
  if(userMove==='Rock'){
    if(computerMove==='Rock'){
      score.tie++;
      document.querySelector('#tie').style.display = 'flex';
    }else if(computerMove==='Paper'){
      score.lost++;
      document.querySelector('#lost').style.display = 'flex';
      // return 'computer won';
    }else if(computerMove==='Scissors'){
      score.win++;
      document.querySelector('#win').style.display = 'flex';
      document.querySelector('#next').style.display='block';
      // return 'User won';
    }
  }else if(userMove==='Paper'){
    if(computerMove==='Rock'){
      score.win++;
      document.querySelector('#win').style.display = 'flex';
      document.querySelector('#next').style.display='block';
      // return 'user won';
    }else if(computerMove==='Paper'){
      score.tie++;
      document.querySelector('#tie').style.display = 'flex';
      // return 'it is tie';
    }else if(computerMove==='Scissors'){
      score.lost++;
      document.querySelector('#lost').style.display = 'flex';
      // return 'Computer won';
    }
  }else if(userMove==='Scissors'){
    if(computerMove==='Rock'){
      score.lost++;
      document.querySelector('#lost').style.display = 'flex';
      // return 'Computer Won';
    }else if(computerMove==='Paper'){
      score.win++;
      document.querySelector('#win').style.display = 'flex';
      document.querySelector('#next').style.display='block';
      // return 'User Won';
    }else if(computerMove==='Scissors'){
      score.tie++;
      document.querySelector('#tie').style.display = 'flex';
      // return 'it is tie';
    }
  }
  
  updateScoreDisplay();
  saveScore();

}

function playAgain(){
  document.querySelector('#tie').style.display='none';
  document.querySelector('#win').style.display='none';
  document.querySelector('#lost').style.display='none';
  document.querySelector('.setcircle').style.display='flex';
  document.querySelector('#next').style.display='none';
}

function openNextPage(){
  window.open('success.html');
}
function hurrayPlayAgain(){
  window.open('index.html');
}