/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let l1 = 5;
let l2 = 6;

const area = function (l1, l2) {
  return l1 * l2;
};

console.log("l area del rettangolo è " + area(l1, l2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n1 = 8;
const n2 = 8;
let crazySum = function (n1, n2) {
  if (n1 !== n2) {
    return n1 + n2;
  } else {
    return (n1 + n2) * 3;
  }
};
console.log("il risultato è " + crazySum(n1, n2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let parametro = 22;
const crazyDiff = function (par1) {
  if (par1 > 19) {
    return Math.abs((par1 - 19) * 3);
  } else return Math.abs(par1 - 19);
};
console.log("il risulato è " + crazyDiff(parametro));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n3 = 500;
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else return false;
};
console.log(boundary(n3));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const stringa = "Giovanni";

const epify = function (stringa) {
  if (stringa.search("EPICODE") >= 0) {
    let stringanospazi = (stringa = stringa.trim());
    if (stringanospazi.indexOf("EPICODE") === 0) {
      return stringa;
    }
  } else {
    let nuovaStringa = "";
    nuovaStringa = nuovaStringa.concat("EPICODE " + stringa);
    return nuovaStringa;
  }
};
console.log(epify(stringa));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
const numPositivo = -3;
const check3and7 = function (Numero) {
  if (Numero > 0) {
    if (Numero % 3 === 0 || Numero % 7 === 0) {
      console.log("il numero fornito è multiplo");
    } else console.log("il numero fornito non è multiplo");
  } else console.log("il numero fornito non è positivo");
};
check3and7(numPositivo);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const stringaDaInvertire = "PAOLO";

const reverseString = function (stringa) {
  let nuovastringa = "";
  for (let i = stringa.length; i >= 0; i--) {
    console.log("entrato");
    nuovastringa = nuovastringa.concat(stringa.charAt(i));
  }
  console.log(nuovastringa);
};
reverseString(stringaDaInvertire);
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let frase = "paolo era andato a casa";
const upperFirst = function (frase) {
  const lista = frase.split(" ");
  console.log(lista);
  for (let i = 0; i < lista.length; i++) {
    lista[i] = lista[i].charAt(0).toUpperCase() + lista[i].substring(1);
  }
  console.log(lista);
};
upperFirst(frase);
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
let stringaDaAccorciare = "Giovanni";

let cutString = function (stringa) {
  for (let i = 0; i < stringa.length; i++) {
    if (i === 1) {
      stringa = stringa.slice(i, i);
    } else if (i === stringa.length) {
      stringa = stringa.slice(stringa.length, stringa.length);
    }
  }
};
let stringa3 = "";
stringa3 = stringa.slice(1, 1);
console.log(stringa3);
console.log(cutString(stringaDaAccorciare));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
