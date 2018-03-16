/*
Pravila Igre:

- Igra ima 2 igraca, igra se u rundama
- U svakoj rundi, igrac baca kockicu koliko god puta zeli. Svaki broj dodaje se trenutnom zbroju 
- Ali, ako se kockica okrene na broj 1, trenutni zbroj se gubi. Nakon toga, igra slijedeci igrac
- Međutim klikom na botun 'Spremi', trenutni zbroj se dodaje ukupnom zbroju . Nakon toga igra slijedeci igrac
- Prvi igrac koji dode do 100 bodova u ukupnom zbroju pobjeduje

*/

var score, activePlayer, dice, roundScore;
score = [0, 0];
roundScore = 0;
activePlayer = 0;

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

document.querySelector('.btn-roll').addEventListener('click', function(){
	// generiraj random broj od 1 do 6
	var dice = Math.floor((Math.random() * 6) + 1);
	// prikazi sliku( na pocetku je skrivena)
	document.querySelector('.dice').style.display = 'block';
	// prikazi odgovarajucu sliku prilikom svakog vrcenja kockice
	document.querySelector('.dice').src = 'dice-' + dice + '.png';
	//zbrajaj trenutne brojeve dok se ne okrene na broj 1
	if(dice === 1){
		document.getElementById('current-' + activePlayer).textContent = '0';
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

	}else{
		roundScore += dice;
		document.getElementById('current-' + activePlayer).textContent = roundScore;
	}

});




