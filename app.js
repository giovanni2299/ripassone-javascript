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

// CREO UN CONTATORE CHE STAMPI "CIAO" DOPO 9 SECONDI

// setTimeout(dimmiCiao, 9000);                      // do un intervallo di tempo espresso in millisecondi dall'apertura della pagina per eseguire la funzione "dimmi ciao"

// function dimmiCiao() {                            // creo la funzione "dimmi ciao"
//     console.log('ciao, sono passati 3 secondi')   // dico alla funzione di stampare il suo contenuto
// };

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CREO UN CONTATORE CHE AUMENTI DI 1 OGNI SECONDO

// let secondi = 0;                       // dichiaro la variabile secondi

// function aggiungiSecondi(){            // creo la funzione per aumentare la variabile 
//     secondi++                          // le dico di incrementarsi di 1
//     console.log(secondi);              // le dico di stampare il nuovo valore
// };

// setInterval(aggiungiSecondi, 1000);    // dico alla funzione di ripetersi ogni secondo

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// DATA UNA STRINGA, LA TRASFORMO IN ALFABETO FARFALLINO

// const stringa = 'luca';                                // dichiaro una stringa di un nome

// const stringaArray = [];                               // dichiaro un array vuoto

// for (let i = 0; i < stringa.length; i++){              // dichiaro un ciclo for che scorra tutte le lettere della stringa
//     const lettera = stringa[i];                        // dichiaro una cstante che sia uguale alla singola lettera della stringa

//     if(lettera === 'a'){                               // dichiaro una condizione secondo cui se una delle lettere è "a" 
//         stringaArray.push('afa')                       // la sostituisce con "afa"
//     } else if (lettera === 'e') {                      // dichiaro una condizione secondo cui se una delle lettere è "e"
//         stringaArray.push('efe')                       // la sostituisce con "efe"
//     } else if (lettera === 'i') {                      // dichiaro una condizione secondo cui se una delle lettere è "i"
//         stringaArray.push('ifi')                       // la sostituisce con "ifi"
//     } else if (lettera === 'o') {                      // dichiaro una condizione secondo cui se una delle lettere è "o"
//         stringaArray.push('ofo')                       // la sostituisce con "ofo"
//     } else if (lettera === 'u') {                      // dichiaro una condizione secondo cui se una delle lettere è "u"
//         stringaArray.push('ufu')                       // la sostituisce con "ufu"
//     } else {                                           // altrimenti se non è una vocale
//         stringaArray.push(lettera)                     // dico di inserirla così com'è
//     }
// }

// console.log(stringaArray.join(''))                     // dico di stampare tutte le lettere ottenute unendole assieme senza virgole o spazi vuoti                 

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

// DESTRUTURAZIONE DI UN ARRAY

// const array = [1, 2, 3, 4, 5, 6];                                     // dichiaro un array di numeri da stampare in base alla posizione inserita soto

// const [primo, secondo, terzo, quarto, quinto, sesto] = array;         // così li stampo in ordine (1-2-3-4-5-6)   N.B. l'ordine equivale a dove scrivo nella destrutturazione i valori "il primo corrisponde all'1, il secondo al 2 ecc."

// const [sesto, quinto, quarto, terzo, secondo, primo] = array;         // così li stampo in oridne inverso (6-5-4-3-2-1)

// const [terzo, quinto, secondo, quarto, sesto, primo] = array;         // così li stampo in oridne sparso (6-3-1-4-2-5)

// console.log(array);

// const [primo, , terzo, quarto, , sesto] = array;                      // così stampo solo quelli non vuoti nell'ordine stabilito (1-3-4-6)

// console.log(primo, terzo, quarto, sesto);

// const [primo, , terzo, ...restOperator] = array;                      // così stampo le cifre segnate nell'ordine stabilito e un array con le cifre successive all'ultima segnata (1-3-[4-5-6])

// console.log(primo, terzo, restOperator);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// USO LO SPREAD OPERATOR PER COPIARE UN ARRAY

// const array = [1, 2, 3, 4, 5, 6];                                        // dichiaro un array di numeri

// const arrayParole = ['ciao', 'io', 'sono', 'christian']                  // dichiaro un array di parole

// const arrayCopiato = [...array];                                         // uso l'operatore spread per copiare i numeri del vecchio array nel nuovo

// console.log(arrayCopiato);                                               // stampo l'array di numeri copiato

// const arrayCopiato1 = [...arrayParole];                                  // uso l'operatore spread per copiare le parole del vecchio array nel nuovo

// console.log(arrayCopiato1);                                              // stampo l'array di parole copiato

//------------------------------------------------------------------------------------------------------------------------------------------------------------

// DESTRUTTURAZIONE DI UN OGGETO

// const studente = {                                              // dichiaro un oggeto chiamato "studente"
//     nome: 'alessio',                                            // gli assegno la proprietà "nome" con valore "alessio"
//     età: 26,                                                    // gli assegno la proprietà "età" con valore "26"
//     id: 315,                                                    // gli assegno la proprietà "id" con valore "315"
//     scuola: 'harvard',                                          // gli assegno la proprietà "scuola" con valore "harvard"
// }

// console.log(studente);                                          // stampo l'oggeto "studente"

// const {nome, età, id, scuola, peso} = studente;                 // destrutturo l'oggetto per prendere i paramentri: nome, età, id, scuola, peso

// console.log(nome, età, id, scuola, peso);                       // stampo i parametri richiesti  N.B. eventuali parametri non presenti come "peso" daranno undefined

// const nuovoStudente = {                                         // dichiaro un oggetto chiamato "nuovo studente"
//     nome: nome,                                                 // gli assegno la proprietà "nome" con valore uguale al dato ottenuto dalla destrutturazione di prima
//     età: età,                                                   // gli assegno la proprietà "età" con valore uguale al dato ottenuto dalla destrutturazione di prima
//     id: id,                                                     // gli assegno la proprietà "id" con valore uguale al dato ottenuto dalla destrutturazione di prima
//     scuola: scuola,                                             // gli assegno la proprietà "scuola" con valore uguale al dato ottenuto dalla destrutturazione di prima
//     peso: 78,                                                   // gli assegno la proprietà "peso" con valore "78"
// }

// console.log(nuovoStudente);                                     // stampo l'oggeto "nuovo studente"

//-------------------------------------------------------------------------------------------------------------------------------------

// ACCEDERE A UNA SOLA PROPRIETÀ DI UN ARRAY DI OGGETI

// const arrayOggetti = [

//     {
//         nome: 'giovanni',
//         cognome: 'sorrentino',
//         età: 24
//     }, 

//     {
//         nome: 'christian',
//         cognome: 'corelli',
//         età: 24 
//     },

//     {
//         nome: 'davide',
//         cognome: 'morellato',
//         età: 32 
//     },
// ]

// const singolaPersona = arrayOggetti[0];               // stampo un singolo oggeto

// console.log(singolaPersona)


// for (let i = 0; i < arrayOggetti.length; i++){                 // stampo i nomi di tutti gli oggeti
//     const singoloOggeto = arrayOggetti[i]
//     const singoloOggetoNome = singoloOggeto.nome

//     console.log(singoloOggetoNome)
// }


// const singoloOggeto1 = arrayOggetti[0];                       // stampo un singolo nome di un singolo oggeto
// const singoloOggetoNome1 = singoloOggeto1.nome

// console.log(singoloOggetoNome1)


// const persona = arrayOggetti[0];                                     // stampo tutte le proprietà di un singolo oggetto

// console.log(persona.nome, persona['cognome'], persona['età'])

//------------------------------------------------------------------------------------------------------------------------------------------

// CREO UN ARRAY DI OGGETI E LI ORDINO IN BASE AL PREZZO CON LA PROPRIETÀ "TO SORT"

// const paniniDelPaninaro = [                                                                                     // creo array di oggeti
//     {                                                        
//         nome: 'cotto e fontina',
//         ingredienti: 'prosciutto coto e fontina',                                                               // assegno all'oggetto certi parametri con certi valori
//         prezzo: 2.50,
//     },

//     {
//         nome: 'cotoleta',
//         ingredienti: 'latuga pomodoro e cotoleta',                                                             // assegno all'oggetto certi parametri con certi valori
//         prezzo: 3.50,
//     },

//     {
//         nome: 'bufala', 
//         ingredienti: 'mozzarella pomodo basilico',                                                            // assegno all'oggetto certi parametri con certi valori
//         prezzo: 3.00,
//     },

//     {
//         nome: 'sfizioso',
//         ingredienti: 'pesto di pistacchi, hamburgher, pomodoro',                                             // assegno all'oggetto certi parametri con certi valori
//         prezzo: 7,
//     },
// ];

// const paniniOdrinati = paniniDelPaninaro.toSorted((panino1, panino2) => panino1.prezzo - panino2.prezzo);   // uso l'operatore "to sorted" per conforntare i prezzi e ordinarli in ordine crescente

// console.log(paniniOdrinati);                                                                                // stampo i panini ordinati in modo crescente   

// const paniniOdrinati1 = paniniDelPaninaro.toSorted((panino1, panino2) => panino2.prezzo - panino1.prezzo);  // uso l'operatore "to sorted" per conforntare i prezzi e ordinarli in ordine decrescente

// console.log(paniniOdrinati1);                                                                               // stampo i panini ordinati in modo crescente 

//------------------------------------------------------------------------------------------------------------------------------------------

// COPIO UN ARRAY CON LA PROPRIETÀ "MAP"

// const numeri = [1, 3, 4, 5, 7, 9, 2];                 //creo un array di numeri

// console.log(numeri);                                  // stampo l'array

// const arrayCopia = numeri.map((element) => {          // nomino una costante per l'array creato in automatico dall'operatore "map"
//     return element                                    // dico quali elementi voglio inserirvi all'interno, altrimenti i dati sarebbero "undefined"
// })

// console.log(arrayCopia);                              // stampo l'array copiato

//--------------------------------------------------------------------------------------------------------------------------------------------

// INVERTO L'ORDINE DELL'ARRAY COPIATO NELL'ESERCIZIO PRECEDENTE COL "REVERSE"

// const arrayInvertito = arrayCopia.reverse();       //creo una variabile in cui stampare al contrario l'array copiato con l'operatore "reverse"

// console.log(arrayInvertito);                       // stampo l'array 

//---------------------------------------------------------------------------------------------------------------------------------------------