// // Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.
// let sum = 0;
// for (let i = 0; i < 10; i++) {
//   const number = parseInt(prompt('inserisci un numero'));
//   sum += number;
// }
// console.log(sum);


// let sum = 0;
// let i = 0;

// while (i < 10) {
//   const number = parseInt(prompt('inserisci un numero'));
//   sum += number;
//   i++;
// }


// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const guests = [
  'Mario',
  'Luisa',
  'Arturo',
  'Sofia',
  'Giuseppe',
  'Filippo',
  'Manuela',
  'Valerio',
  'Edoardo'
];

//chiediamo all'utente il suo nome
const nameUser = prompt('Inserisci il tuo nome');

// let message = 'Non puoi entrare';
// //controlliamo se nell'array abbiamo una corrispondenza
// for (let index = 0; index < guests.length; index++) {
//   //guests[1]
//   console.log(guests[index]);
//   if (nameUser == guests[index]) {
//     console.log('Trovato');
//     message = 'Puoi entrare';
//   }
// }

// console.log(message);

//nameUser != guests[i]
//find false
//i < guests.length

let find = false;
let i = 0;
//find == false  &&  i < guests.length // vero solo se entrambe vere
while (find == false && i < guests.length) {
  console.log(guests[i]);
  if (nameUser == guests[i]) {
    console.log('Trovato');
    find = true;
  }
  i++;
}

console.log('find ', find);