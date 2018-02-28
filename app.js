var scores , roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

newGame();

document.querySelector('.btn-roll').addEventListener('click', function() {

	dice =Math.floor(Math.random() * 6) +1;
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

	if(dice!== 1){
		//first player
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
		//next player
		nextPlayer();
	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {

		scores[activePlayer] += roundScore;
		document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
		if (scores[activePlayer] > 10) {
			document.querySelector('#name-'+activePlayer).textContent = 'Winner';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-'+activePlayer+ '.-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+ '.-panel').classList.remove('active');			

			newGame();
		}
		nextPlayer();
	
});



function nextPlayer() {
	activePlayer ===0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.querySelector('#current-0').textContent = 0;
		document.querySelector('#current-1').textContent = 0;

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

};

document.querySelector('.btn-new').addEventListener('click', function(){
	newGame();	

});

function newGame() {
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
};