// Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
// A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
// ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi
// assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :)

// Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
// Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
// In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const prices = [54, 5, 37];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = marco; //Cambia il valore qui per provare se il tuo algoritmo funziona!

let costoCarrello = 0;

// Somma di tutti i prezzi

for (let x = 0; x < prices.length; x++) {
  costoCarrello += prices[x];
}

//console.log(costoCarrello);

// Applica lo sconto se l'utente è Ambassador

let carrelloFinale = utenteCheEffettuaLAcquisto.isAmbassador
  ? costoCarrello * 0.7
  : costoCarrello;

//console.log(carrelloFinale);

//Aggiunge la spedizione se il costo totale è < 100

let cartAndShipping =
  carrelloFinale < 100 ? carrelloFinale + shippingCost : carrelloFinale;

//console.log(cartAndShipping);

console.log(utenteCheEffettuaLAcquisto.name + " ha speso $" + cartAndShipping);
