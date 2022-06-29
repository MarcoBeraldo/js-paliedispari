// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// creo un prompt per decidere se pari o dispari userEven= true
// creo un prompt per far scegliere il numero all'utente
// genero un numero random per il pc da 1 a 5 function randomizeNumber
// sommo userNumber e pcRandomNumber 
// if (userNumber + pcRandomNumber % 2 && userEven =true) message = hai vinto! else 'Hai perso!'

let even = 'pari';
let odd = 'dispari';
let min = 1;
let max = 5;
let sum = 0;

userChoice = prompt(`scegli ${even} o ${odd}`);
console.log('Il giocatore ha scelto: ' + userChoice);
userNumber = parseInt(prompt(`scegli un numero tra ${min} e ${max}`));
console.log('Il numero del giocatore è: ' + userNumber);

function randomizeNumber(min, max) {

    pcRandomNumber = Math.floor(Math.random() * max) + min;
    let result = parseInt(pcRandomNumber);

    return result;
}

pcRandomNumber = randomizeNumber(min, max)
console.log('Il numero del PC è: ' + pcRandomNumber)

sum = pcRandomNumber + userNumber;
console.log('La somma è: ' + sum);

function isEven(sum) {
    let message = 'dispari';

    if (sum % 2 === 0) {
        message = 'pari';
    }

    return message;
}

message = isEven(sum);
console.log(message);

if (message === userChoice) {
    console.log('Hai vinto!')
} else console.log('Hai perso!');

