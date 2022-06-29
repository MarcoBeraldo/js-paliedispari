let even = 'pari';
let odd = 'dispari';
let min = 1;
let max = 5;
let sum = 0;
retryButton = document.getElementById('retry-button');
startButton = document.getElementById('button');

function isEven(sum) {
    let message = 'dispari';

    if (sum % 2 === 0) {
        message = 'pari';
    }

    return message;
}

function randomizeNumber(min, max) {

    pcRandomNumber = Math.floor(Math.random() * max) + min;
    let result = parseInt(pcRandomNumber);

    return result;
}


startButton.addEventListener("click", function () {
    userChoice = prompt(`scegli ${even} o ${odd}`);
    document.getElementById('choice').textContent += userChoice;

    userNumber = parseInt(prompt(`scegli un numero tra ${min} e ${max}`));
    document.getElementById('number').textContent += userNumber;

    pcRandomNumber = randomizeNumber(min, max)
    document.getElementById('pc-number').textContent += pcRandomNumber;

    sum = pcRandomNumber + userNumber;
    console.log(sum)

    message = isEven(sum);


    if (message === userChoice) {
        document.getElementById('result').textContent += 'HAI VINTO!'
    } else document.getElementById('result').textContent += 'HAI PERSO!';


    retryButton.classList.remove("invisible");
});



retryButton.addEventListener("click", function () {
    window.location.reload();
})



















