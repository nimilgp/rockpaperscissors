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

	if(playersel===computersel){
		console.log(`Tie`);
		return 0;
	}

	else if(playersel==="rock"&&computersel==="scissors" ||
		playersel==="paper"&&computersel==="rock" ||
		playersel==="scissors"&&computersel==="paper"){
		console.log(`Won!!! ${playersel} beats ${computersel}`);
		return 1;
	}

	else{
		console.log(`Lost!!! ${computersel} beats ${playersel}`);
		return -1;
	}
}

function game(){
	playerPoint = 0;
	computerPoint = 0;
	for(let i=0; i<5; i++){
		console.log(`Round: ${i}`);
		compsel = getComputerChoice();
		plrsel = prompt("(rock or paper or scissors?)\nenter your choice:");
		console.log(`player:${plrsel} v computer:${compsel}`);
		result = playRound(plrsel,compsel);
		if(result===1){
			playerPoint++;
		}
		else if(result===-1){
			computerPoint++;
		}
		console.log(`Current score\nplayer: ${playerPoint}\ncomputer: ${computerPoint}`);
	}
	if(playerPoint>computerPoint){
		console.log("You Win!!!  :)")
	}
	else if(playerPoint==computerPoint){
		console.log("It's a Tie");
	}
	else{
		console.log("You Lose... :(");
	}
}

game();
