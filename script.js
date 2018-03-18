/*
Pravila Igre:

- Igra ima 2 igraca, igra se u rundama
- U svakoj rundi, igrac baca kockicu koliko god puta zeli. Svaki broj dodaje se trenutnom zbroju 
- Ali, ako se kockica okrene na broj 1, trenutni zbroj se gubi. Nakon toga, igra slijedeci igrac
- Međutim klikom na botun 'Spremi', trenutni zbroj se dodaje ukupnom zbroju . Nakon toga igra slijedeci igrac
- Prvi igrac koji dode do 100 bodova u ukupnom zbroju pobjeduje

*/

var score, activePlayer, dice, roundScore, gamePlaying;

function init(){
	score = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	// ukoliko zelimo unijeti html kod trebamo koristiti innerHtml umjesto textContent
	//document.querySelector('#current-' + activePlayer).textContent = dice; 

	// pocetno skrivanje kockice
	document.querySelector('.dice').style.display = 'none';

	// pocetno stavljanje svih brojenja na 0, koristim getElementById,
	// jer je brzi od querySelectora
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	// postavljanje imena igraca
	document.getElementById('name-0').textContent = 'Igrac 1';
	document.getElementById('name-1').textContent = 'Igrac 2';
	// kad igrac pobijedi pozivamo winner style, kojeg treba maknuiti prilikom nove igre
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	//ponovo dodajemo active style
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}
	init();

document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying){
		// generiraj random broj od 1 do 6
		var dice = Math.floor((Math.random() * 6) + 1);
		// prikazi sliku( na pocetku je skrivena)
		document.querySelector('.dice').style.display = 'block';
		// prikazi odgovarajucu sliku prilikom svakog vrcenja kockice
		document.querySelector('.dice').src = 'dice-' + dice + '.png';
		//zbrajaj trenutne brojeve dok se ne okrene na broj 1
		if(dice === 1){
			nextPlayer();
		}else{
			roundScore += dice;
			document.getElementById('current-' + activePlayer).textContent = roundScore;
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying){
		// dodavanje trenutnog zbroja ukupnom zbroju, te prikaz na stranici
		score[activePlayer] += roundScore; 
		document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

		// provjera je li igrac ostvario 100 bodova i tako dosao do pobjede
		if(score[activePlayer] >= 10){
		document.getElementById('name-' + activePlayer).textContent= 'Pobjednik !!!';
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		gamePlaying = false;
		}else{		
		//mijenjanje igraca
		nextPlayer();	
		}
	}
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){
	document.getElementById('current-' + activePlayer).textContent = '0';
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
}

