// STAMPO IN CONSOLE GLI ELEMENTI DI UN ARRAY

// const arrayNumeri = [1, 2, 3, 4, 5, 6, 7, 8];     // creo un array di numeri da 1 a 8

// for (let i = 0; i < arrayNumeri.length; i++){     // creo un ciclo per scorrere tutti i numeri dell'array in ordine (da 1 a 8)
//     const numero = arrayNumeri[i];                // creo una costante che indichi ogni numero corrispondente al suo indice nell'array
//     console.log(numero);                          // stampo il numero
// };


// for (let i = 0; i <= 5; i++){                     // creo un ciclo che scorra i numeri da 1 a 6 in oridne.       N.B. possp scrivere anche: for (let i = 0; i < 6; i++){
//     const numero = arrayNumeri[i];                // creo una costante che indichi ogni numero corrispondente al suo indice nell'array 
//     console.log(numero);                          // stampo il numero
// };


// for (let i = 7; i >= 0; i--){                     // creo un ciclo che scorra tutti i numeri dell'array in ordine inverso (da 8 a 1)
//     const numero = arrayNumeri[i];                // creo una costante che indichi ogni numero corrispondente al suo indice nell'array
//     console.log(numero);                          // stampo il numero
// };


// for (let i = 5; i >= 0; i--){                     // creo un ciclo che scorra all'inverso i numeri da 6 a 1.
//     const numero = arrayNumeri[i];                // creo una costante che indichi ogni numero corrispondente al suo indice nell'array
//     console.log(numero);                          // stampo il numero
// };

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// STAMPO IN CONSOLE DEI NUMERI FILTRATI DA UN IF

// for (let i = 0; i < arrayNumeri.length; i++){       // creo un ciclo for per scorrere tutti gli elementi di un array
//     const numero = arrayNumeri[i];                  // creo una costante che indichi ogni numero corrispondente al suo indice nell'array
//     const numPari = numero % 2;                     // creo una costante che indichi che un numero vada diviso per 2

//     if (numPari === 0){                             // creo una condizione che dica che se un numero diviso 2 da come resto 0 allora è pari
//         console.log('numero pari', numero)          // se quella condizione è vera dico di stampare il numero con scritto "numero pari"
//     } else {                                        // altrimenti
//         console.log('numero dispari', numero)       // se quella condizione è falsa dico di stampare il numero con scritto "numero dispari"
//     }
// };


// for (let i = 0; i < arrayNumeri.length; i++){       // creo un ciclo for per scorrere tutti gli elementi di un array
//     const numero = arrayNumeri[i];                  // creo una costante che indichi ogni numero corrispondente al suo indice nell'array

//     if (numero <= 3){                               // creo una condizione che dica che se un numero è minore o uguale a 3
//         console.log('i primi tre', numero)          // se quella condizione è vera dico di stampare il numero con scritto "i primi tre"
//     } else if ( numero > 3 && numero < 6 ){         // oppure se è maggiore di 3 e minore di 6
//         console.log('in mezzo', numero)             // dico di stampare il numero con scritto "in mezzo"
//     } else {                                        // altrimenti
//         console.log('ultimi tre', numero)           // dico di stampare il numero con scritto "ultimi tre"
//     }
// };

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// CREO UN GENERATORE RANDOM DI UN SOLO NUMERO TRA 3 E 10 

// const max1 = 10;                                                              //dichiaro un numero massimo oltre al quale non andare
// const min1 = 3;                                                               // dichiaro un numero minimo sotto alla quale non scendere

// const numeroRandom1 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);   // creo una costante che stampi un numero da un minimo 3 a un massimo 9 e aggiunga 1. 

// console.log(numeroRandom1);                                                   // stampo in risultatao

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CREO UN GENERATORE DI UN SOLO NUMERO TRA 1 E 10

// const max2 = 10;                                                  // dichiaro un numero massimo
// const min2 = 1;                                                   // dichiaro un numero minimo

// const numeroRandom2 = Math.floor(Math.random() * max2 )+ min2;    // creo una costante che stampi un numero da 1 a 10. N.B. se min = 0 allora stampa da 0 a 9

// console.log(numeroRandom2);                                       // stampo in risultatao

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CREO UN GENERATORI DI N. NUMERI CASUALI DA 0 A 10 COLLEGATO A UN BOTTONE

// const max3 = 10;                                                        // dichiaro un numero massimo
// const min3 = 0;                                                         // dichiaro un numero minimo

// const quantitàNumeri1 = 10;                                             // dichiaro una quantità definita di numeri da stampare

// const arrayQuantitàNumeri1 = [];                                        // dichiaro un array in cui inserirli

// const btnNumeriCasuali = document.querySelector('#ripetizioneNum');     // collego il bottone per generare numeri random

// btnNumeriCasuali.addEventListener('click', function(){                  //collego il bottone all'evento del click

//     for(let i = 0; i < quantitàNumeri1; i++){                           // scrivo un ciclo che esegua ciò che c'è dentro tante volte quante sono segnate nella costante "quantitàNumeri1"
//         let numeriRandom1 = Math.floor(Math.random() * max3 )+ min3;    // creo una variabile per il ciclo, per stampare un numero da 0 a 9. N.B. se aggiungo 1 stampa da 1 a 10
//         arrayQuantitàNumeri1.push(numeriRandom1);                       // dico al ciclo di volta in volta che stampa un numero di inserirlo nell'array
//     }
// })

// console.log(arrayQuantitàNumeri1);                                      // stampo i valori dentro l'array

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CREO UN GENERATORE DI NUMERI CASUALI NON RIPETUTI DA 0 A 10 COLLEGATO A UN BOTTONE

// const max4 = 10;                                                            // dichiaro un numero massimo
// const min4 = 0;                                                             // dichiaro un numero minimo

// const quantitàNumeri2 = 10;                                                 // dichiaro una quantità definita di numeri da stampare

// const arrayQuantitàNumeri2 = [];                                            // dichiaro un array in cui inserirli

// const btnNumeriCasualiNoRep = document.querySelector('#ripetizioneNum');    // collego il bottone per generare numeri random

// btnNumeriCasualiNoRep.addEventListener('click', function(){                 //collego il bottone all'evento del click

//     while ( arrayQuantitàNumeri2.length< quantitàNumeri2 ){                 // scrivo un ciclo che esegua ciò che c'è dentro finchè l'array non ha tanti numeri quanti sono segnati nella costante "quantitàNumeri2"
//         let numeriRandom2 = Math.floor(Math.random() * max4 )+ min4;        // creo una variabile per il ciclo, per stampare un numero da 0 a 9. N.B. se aggiungo 1 stampa da 1 a 10

//         if (arrayQuantitàNumeri2.includes(numeriRandom2) === false) {       // dico di controllare i numeri creati con quelli dell'array 
//             arrayQuantitàNumeri2.push(numeriRandom2);                       // se il numero non è presente allora dico di inserirlo nell'array, altrimenti di stampare un altro numero 
//         }
//     }
// })

// console.log(arrayQuantitàNumeri2);                                          // stampo i valori dentro l'array

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CREO UNA FUNCTION PER DIRE CIAO E PER STAMPARE UN NUMERO

// function dìCaio() {              // creo una funzione e la chiamo "dì ciao"
//     console.log('Ciao')          // dico alla funzione di stampare in console la scritta "Ciao" quando verrà invocata
//     console.log(5)               // dico alla funzione di stampare in console un numero "5" quando viene invocata
// }

// dìCaio();                        // invoco la funzione

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CREO UNA FUNZIONE CHE INTERAGISCA CON DEI NUMERI

// function somma(parametroA, parametroB){           // creo una funzione, la chiamo "somma" e le dico di prendere 2 parametri non specificati
//     console.log(parametroA + parametroB)          // dico alla funzione di stampare in console quando verrà evocata il primo parametro + il secondo parametro
//     console.log(parametroA - parametroB)          // dico alla funzione di stampare in console quando verrà evocata il primo parametro - il secondo parametro
//     console.log(parametroA * parametroB)          // dico alla funzione di stampare in console quando verrà evocata il primo parametro moltiplicato per il secondo parametro
//     console.log(parametroA / parametroB)          // dico alla funzione di stampare in console quando verrà evocata il primo parametro diviso per il secondo parametro
// }

// somma(4, 2)                                       // evoco la funzione e do come primo parametro il numero 4 e come secondo parametro il numero 2

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// CREO UNA FUNZIONE CON IL RITORNO DEI DATI FUORI DA ESSA

// function somma(a, b){                        // creo una funzione chiamata somma e le dico di prendere due valori: A & B
//     return a + b                             // dico alla funzione di rendere visibile il risultato di A + B a livello globale.        N.B. se scrivo altro codice dopo il return non verrà mai letto o eseguito
// }

// const valoreDellaSomma = somma(2, 3)         // creo una costante chiamata "valore somma" e le dico che deve essere uguale al valore di della funzione se avesse come parametri 2 & 3

// console.log(valoreDellaSomma)                // stampo il valore della costante "valore somma"

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CREO UN CONTATORE CHE AUMENTI IL PUNTEGGIO OGNI VOLTA CHE CLICCO UN BOTTONE APPOSITO

// const bottoneDeiClick = document.querySelector('.btn-counter');   // richiamo l'elemento del bottone

// let punteggioClick = document.querySelector('.numeroClick');      // richiamo lo span dentro l'h1
// punteggioClick.innerHTML = 0;                                     // dico allo span di attaccare al testo dell'h1 e di stampare in console il numero 0

// bottoneDeiClick.addEventListener('click', function(){             // dico di aggiungere al bottone l'ascolto dell'evento click per eseguire un azione
//     punteggioClick.innerHTML++;                                   // quando clicco il bottone dico di aumentare di 1 il numero del punteggio
//     console.log(punteggioClick);                                  // quando clicco il bottone dico anche di stampare in cosnole lo span col numero aumentato di 1
// });

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CREO UN CONTATORE CHE ESEGUA UNA AZIONE DOPO TOT SECONDI

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CREO UN CONTATORE CHE ESEGUA UNA AZIONE OGNI TOT SECONDI DA QUANDO PREMO UN BOTONE E CHE SI FERMI QUANDO NE PREMO UN ALTRO

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// DATA UNA STRINGA, TRASFORMALA IN ALFABETO FARFALLINO

// const stringa = 'luca';                                // dichiaro una stringa di un nome

// const stringaArray = [];                               // dichiaro un array vuoto

// for (let i = 0; i < stringa.length; i++){              // dichiaro un ciclo for che scorra tutte le lettere della stringa
//     const lettera = stringa[i];                        // dichiaro una cstante che sia uguale alla singola lettera della stringa

//     if(lettera === 'a'){                               // dichiaro una condizione secondo cui se una delle lettere è "a"
//         stringaArray.push('afa')
//     } else if (lettera === 'e') {
//         stringaArray.push('efe')
//     } else if (lettera === 'i') {
//         stringaArray.push('ifi')
//     } else if (lettera === 'o') {
//         stringaArray.push('ofo')
//     } else if (lettera === 'u') {
//         stringaArray.push('ufu')
//     } else {
//         stringaArray.push(lettera)
//     }

// }

// console.log(stringaArray.join('')) 

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// DATA UNA IPOTETICA STRINGA CHE SI RIPETE ALL'INFINITO, NE STAMPO SOLO UNA PARTE SPECIFICA TRA GLI INDICI 8 E 12 COMPRESI

// const stringaInfinita = 'ABCDEABCDEABCDEABCDEABCDEABCDE';

// const indexMax = 12;
// const indexMin = 8;

// const lettereArray = [];

// for (let i = indexMin; i <= indexMax; i++){
//     const leteraCorrente = stringaInfinita[i];
//     lettereArray.push(leteraCorrente)
// }

// console.log(lettereArray.join(''))

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// DA UN ARRAY DI NUMERI FILTRO E STAMPO SOLO I NUMERI PARI

// const arrayNumeriSnack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numeriPari = arrayNumeriSnack.filter((num) => num % 2 === 0);

// console.log(numeriPari);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// DA UNA PAROLA IN PICCOLO LA RISTAMPO CON LA PRIMA LETTERA MAIUSCOLA

// const prova = capitalize('ciao');
// console.log(prova);

// function capitalize(string) {
//     let lowerString = string.toLowerCase();
//     let firstLetter = string[0];
//     lowerString = firstLetter.toUpperCase() + lowerString.slice(1)  // aggiunge a partire da

//     return lowerString
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// ACCEDERE A UNA SOLA PROPRIETÀ DI UN ARRAY DI OGGETI

const arrayOggetti = [

    {
        nome: 'giovanni',
        cognome: 'sorrentino',
        età: 24
    }, 

    {
        nome: 'christian',
        cognome: 'corelli',
        età: 24 
    },

    {
        nome: 'davide',
        cognome: 'morellato',
        età: 32 
    },
]

// const singolaPersona = arrayOggetti[0];

// console.log(singolaPersona)


// for (let i = 0; i < arrayOggetti.length; i++){
//     const singoloOggeto = arrayOggetti[i]
//     const singoloOggetoNome = singoloOggeto.nome

//     console.log(singoloOggetoNome)
// }


// const singoloOggeto1 = arrayOggetti[0];
// const singoloOggetoNome1 = singoloOggeto1.nome

// console.log(singoloOggetoNome1)


const persona = arrayOggetti[0];

console.log(persona.nome, persona['cognome'], persona['età'])