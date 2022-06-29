// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// **********************************************************************

// creo un prompt per chiedere una parola all' utente userWord

// dichiaro la funzione isPalyndrome

// ordino i caratteri della parola userWord in un senso orderedWord
// ordino i caratteri nell'altro senso reversedWord
// if (orderedWord === reversedWord){isPalyndrome ? : false}

//come risultato ottengo il message ='la parola è palindroma' o 'la parola non è palindroma'

// **********************************************************************

const userWord = prompt('inserisci una parola');
console.log(userWord);

function isPalyndrome(userWord) {
    let reversedWord = '';
    let message = '';
    for (let i = userWord.length - 1; i >= 0; i--) {
        reversedWord += userWord[i];
    }

    if (reversedWord === userWord) {
        message += 'la parola è palindroma';
    } else message += 'la parola non è palindroma';


    return message;

}

reversedWord = isPalyndrome(userWord);
console.log(reversedWord)
