function getRandomInt(min, max) {
  // The Math.floor() function is used to round down to the nearest integer
  min = Math.ceil(min);
  max = Math.floor(max);
  // Generate a random number between min (inclusive) and max (exclusive)
  return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerChoice(){
	options = ["rock","paper","scissors"];
	index = getRandomInt(0,3);
	return options[index];
}

function playRound(playerSelection, computerSelection) {
	playersel = playerSelection.toLowerCase();
	computersel = computerSelection;
	const result = document.querySelector("#result");
	if(playersel===computersel){
		result.textContent = `It's a Tie!`;
		return 0;
	}

	else if(playersel==="rock"&&computersel==="scissors" ||
		playersel==="paper"&&computersel==="rock" ||
		playersel==="scissors"&&computersel==="paper"){
		result.textContent = `Won!!! ${playersel} beats ${computersel}`;
		return 1;
	}

	else{
		result.textContent = `Lost!!! ${computersel} beats ${playersel}`;
		return -1;
	}
}

function handleClick(playerchoice){
	const finalResult = document.querySelector("#final-result");
	if(finalResult.textContent.length>0){
		finalResult.textContent = "";
	}

	const playerScore = document.querySelector("#plr-score");
	const computerScore = document.querySelector("#cmp-score");
	playerPoint = playerScore.textContent;
	computerPoint = computerScore.textContent;
	compsel = getComputerChoice();
	result = playRound(playerchoice,compsel);

	const playerMove = document.querySelector("#player-move");
	const computerMove = document.querySelector("#computer-move");
	const dict = {
		"rock":"✊",
		"paper":"✋",
		"scissors":"✌️"
	};
	playerMove.textContent = dict[playerchoice];
	computerMove.textContent = dict[compsel];
	if(result===1){
		playerPoint++;
	}
	else if(result===-1){
		computerPoint++;
	}
	console.log(`Current score\nplayer: ${playerPoint}\ncomputer: ${computerPoint}`);
	
	
	if(playerPoint >= 5){
		finalResult.textContent = "You Won!!!👍(play again?)";
		playerPoint = 0;
		computerPoint = 0;
	}
	if(computerPoint >=5){
		finalResult.textContent = "You Lost!👎(play again?)";
		playerPoint = 0;
		computerPoint = 0;
	}
	playerScore.textContent = playerPoint;
	computerScore.textContent = computerPoint;
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click',()=>handleClick("rock"));
paper.addEventListener('click',()=>handleClick("paper"));
scissors.addEventListener('click',()=>handleClick("scissors"));

