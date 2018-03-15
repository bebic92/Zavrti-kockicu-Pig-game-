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
dice = Math.floor((Math.random() * 6) + 1);
console.log(dice);
// ukoliko zelimo unijeti html kod trebamo koristiti innerHtml umjesto textContent
document.querySelector('#current-' + activePlayer).textContent = dice; 
// pocetno skrivanje kockice
document.querySelector('.dice').style.display = 'none';