//Choice buttons
var rockBtn=document.getElementById("rock");
var paperBtn=document.getElementById("paper");
var scissorsBtn=document.getElementById("scissors");
//Start and next buttons
var nextBtn=document.getElementById("next-round");
var startBtn=document.getElementById("start-game");
//User stats
var userScore=document.getElementById("user-score");
var userBet=document.getElementById("user-bet");
var userWins=document.getElementById("user-wins");
var userTotal=document.getElementById("user-total");
//Computer stats
var calcScore=document.getElementById("calc-score");
var calcBet=document.getElementById("calc-bet");
var calcWins=document.getElementById("calc-wins");
var calcTotal=document.getElementById("calc-total");
//Game stats
var gameStats=document.getElementById("game-stats");
var playedRounds=document.getElementById("rounds-played");
var remRounds=document.getElementById("remaining-rounds");
var roundResult=document.getElementById("round-result");
var roundWinner=document.getElementById("round-winner");
var totalGames=document.getElementById("total-games");

var rounds, user=0, calc=0, games=0, userW=0, calcW=0;
var rock=false, paper=false, scissors=false;
const array=["Rock", "Paper", "Scissors"];
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled=true;

function calcRandom(arr){
  const rnd=Math.floor(Math.random()*arr.length);
  const item=array[rnd];
  return item;
}

function start(){
  startBtn.style.display="none";
  nextBtn.style.display="inline-block";
  userScore.style.display="block";
  calcScore.style.display="block";
  gameStats.style.display="block";
  document.getElementById("lose-icon").style.display="none";
  document.getElementById("win-icon").style.display="none";
  document.getElementById("tie-icon").style.display="none";
  rounds=0;
  user=0;
  calc=0;
  rock=false;
  paper=false;
  scissors=false;
  rockBtn.disabled=false;
  paperBtn.disabled=false;
  scissorsBtn.disabled=false;
  playedRounds.innerHTML="Rounds played: "+String(rounds);
  remRounds.innerHTML="Rounds remaining: "+String(5-rounds);
  roundResult.innerHTML="Round result: -";
  roundWinner.innerHTML="Current round winner: -";
  totalGames.innerHTML="Total games played: "+String(games);
}

function RockBet(){
  paperBtn.disabled=true;
  scissorsBtn.disabled=true;
  rock=true;
  const calcValue=calcRandom(array);
  userBet.innerHTML="Rock";
  calcBet.innerHTML=calcValue;
  if(rock==true && calcValue=="Rock"){
    roundResult.innerHTML="Round result: TIE";
    roundWinner.innerHTML="Current round winner: -";
    totalGames.innerHTML="Total games played: "+String(games);
    userWins.innerHTML="Total games win: "+String(userW);
      userTotal.innerHTML="total round points: "+String(user);
      calcWins.innerHTML="Total games win: "+String(calcW);
      calcTotal.innerHTML="Total round points: "+String(calc);
  }
  else
  if(rock==true && calcValue=="Paper"){
    roundResult.innerHTML="Round result: Loss";
    roundWinner.innerHTML="Current round winner: Computer";
    totalGames.innerHTML="Total games played: "+String(games);
    
    calc++;
    userWins.innerHTML="Total games win: "+String(userW);
      userTotal.innerHTML="total round points: "+String(user);
      calcWins.innerHTML="Total games win: "+String(calcW);
      calcTotal.innerHTML="Total round points: "+String(calc);
  }
  else 
  if(rock==true && calcValue=="Scissors"){
    roundResult.innerHTML="Round result: Win";
    roundWinner.innerHTML="Current round winner: User";
    totalGames.innerHTML="Total games played: "+String(games);
      roundResult.innerHTML="Round result: User wins!";
      user++;
      userWins.innerHTML="Total games win: "+String(userW);
      userTotal.innerHTML="total round points: "+String(user);
      calcWins.innerHTML="Total games win: "+String(calcW);
      calcTotal.innerHTML="Total round points: "+String(calc);
    
  }
  rockBtn.disabled=true;
  rock=false;
}

function PaperBet(){
  rockBtn.disabled=true;
  scissorsBtn.disabled=true;
  paper=true;
  const calcValue=calcRandom(array);
  userBet.innerHTML="Paper";
  calcBet.innerHTML=calcValue;
  if(paper==true && calcValue=="Paper"){
    roundResult.innerHTML="Round result: TIE";
    roundWinner.innerHTML="Current round winner: -";
    totalGames.innerHTML="Total games played: "+String(games);
    userWins.innerHTML="Total games win: "+String(userW);
      userTotal.innerHTML="total round points: "+String(user);
      calcWins.innerHTML="Total games win: "+String(calcW);
      calcTotal.innerHTML="Total round points: "+String(calc);
  }
  else
  if(paper==true && calcValue=="Scissors"){
    roundResult.innerHTML="Round result: Loss";
    roundWinner.innerHTML="Current round winner: Computer";
    totalGames.innerHTML="Total games played: "+String(games);
    calc++;
    userWins.innerHTML="Total games win: "+String(userW);
      userTotal.innerHTML="total round points: "+String(user);
      calcWins.innerHTML="Total games win: "+String(calcW);
      calcTotal.innerHTML="Total round points: "+String(calc);
  }
  else 
  if(paper==true && calcValue=="Rock"){
    roundResult.innerHTML="Round result: Win";
    roundWinner.innerHTML="Current round winner: User";
    totalGames.innerHTML="Total games played: "+String(games);
    user++;
    userWins.innerHTML="Total games win: "+String(userW);
      userTotal.innerHTML="total round points: "+String(user);
      calcWins.innerHTML="Total games win: "+String(calcW);
      calcTotal.innerHTML="Total round points: "+String(calc);
  }
  paper=false;
  paperBtn.disabled=true;
}

function ScissorsBet(){
  paperBtn.disabled=true;
  rockBtn.disabled=true;
  scissors=true;
  const calcValue=calcRandom(array);
  userBet.innerHTML="Scissors";
  calcBet.innerHTML=calcValue;
  if(scissors==true && calcValue=="Scissors"){
    roundResult.innerHTML="Round result: TIE";
    roundWinner.innerHTML="Current round winner: -";
    totalGames.innerHTML="Total games played: "+String(games);
    userWins.innerHTML="Total games win: "+String(userW);
      userTotal.innerHTML="total round points: "+String(user);
      calcWins.innerHTML="Total games win: "+String(calcW);
      calcTotal.innerHTML="Total round points: "+String(calc);
  }
  else
  if(calcValue=="Rock" && scissors==true){
    roundResult.innerHTML="Round result: Loss";
    roundWinner.innerHTML="Current round winner: Computer";
    totalGames.innerHTML="Total games played: "+String(games);
    calc++;
    userWins.innerHTML="Total games win: "+String(userW);
      userTotal.innerHTML="total round points: "+String(user);
      calcWins.innerHTML="Total games win: "+String(calcW);
      calcTotal.innerHTML="Total round points: "+String(calc);
  }
  else 
  if(calcValue=="Paper" && scissors==true){
    roundResult.innerHTML="Round result: Win";
    roundWinner.innerHTML="Current round winner: User";
    totalGames.innerHTML="Total games played: "+String(games);
    user++;
    userWins.innerHTML="Total games win: "+String(userW);
      userTotal.innerHTML="total round points: "+String(user);
      calcWins.innerHTML="Total games win: "+String(calcW);
      calcTotal.innerHTML="Total round points: "+String(calc);
  }
  scissorsBtn.disabled=true;
  scissors=false;
}

function nextGame(){
  rounds++;
  playedRounds.innerHTML="Rounds played: "+String(rounds);
  remRounds.innerHTML="Rounds remaining: "+String(5-rounds);
  rockBtn.disabled=false;
  paperBtn.disabled=false;
  scissorsBtn.disabled=false;
  document.getElementById("tie-icon").style.display="none";
    document.getElementById("win-icon").style.display="none";
    document.getElementById("lose-icon").style.display="none";
  if(rounds==5){
    totalGames.innerHTML="Total games played: "+String(games);
    games++;
    document.getElementById("next-round").style.display="none";
    document.getElementById("start-game").style.display="inline";
    if(calc<user){
      userW++;
      roundResult.innerHTML="Round result: User wins!";
      userWins.innerHTML="Total games win: "+String(userW);
      userTotal.innerHTML="total round points: "+String(user);
      calcWins.innerHTML="Total games win: "+String(calcW);
      calcTotal.innerHTML="Total round points: "+String(calc);
      document.getElementById("win-icon").style.display="inline-block";
    }
    else
    if(calc>user){
      calcW++;
      roundResult.innerHTML="Round result: Computer wins!";
      userWins.innerHTML="Total games win: "+String(userW);
      userTotal.innerHTML="total round points: "+String(user);
      calcWins.innerHTML="Total games win: "+String(calcW);
      calcTotal.innerHTML="Total round points: "+String(calc);
      document.getElementById("lose-icon").style.display="inline-block";
    }
    else
    if(calc==user){
      roundResult.innerHTML="Round result: OMG! It's a tie!";
      userWins.innerHTML="Total games win: "+String(userW);
      userTotal.innerHTML="total round points: "+String(user);
      calcWins.innerHTML="Total games win: "+String(calcW);
      calcTotal.innerHTML="Total round points: "+String(calc);
      document.getElementById("tie-icon").style.display="inline-block";
    }
    rockBtn.disabled=true;
    paperBtn.disabled=true;
    scissorsBtn.disabled=true;
    nextBtn.style.display="none";
    startBtn.style.display="inline";
  }
}

startBtn.addEventListener("click", start);

rockBtn.addEventListener("click", RockBet);
paperBtn.addEventListener("click", PaperBet);
scissorsBtn.addEventListener("click", ScissorsBet);
nextBtn.addEventListener("click", nextGame);
