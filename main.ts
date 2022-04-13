/**
 *
 * ESERCIZIO 1
 *
 * Rimpiazza il tipo any con un custom type
 *
 * Dovrai creare un nuovo type Member che rappresenti la struttura dell'oggetto
 *
 * TIP: puoi utilizzare interface, type o class
 */

const member: any = {
  url: 'www.fabiobiondi.io',
  author: 'Fabio Biondi',
};

console.log(member)
member.url = 'asdad'
console.log(member)

class miaClasse {
anagrafica : string;
url: string;
constructor(nominativo: string, theUrl: string) {
  this.anagrafica = nominativo;
  this.url = theUrl;
}
}

const elemento = new miaClasse('Fabio Biondi','www.fabiobiondi.io')
console.log(elemento)
elemento.anagrafica="minni"
console.log(elemento)
elemento.anagrafica = 'Fabio Biondi'

/**
 * ESERCIZIO 2
 *
 * Visualizza la seguente stringa utilizzando i template literals (`string`)
 *
 * GOAL
 *
 * Fabio Biondi - www.fabiobiondi.io
 */

/*
console.log(`
        Hi 
            ${name} 
            ${surname} 
            (${age})`);
*/

const star = '*'
const scopo = 'GOAL'

export const output1 = `
            ${star}
              ${star} ${scopo}
            ${star}
            ${star} ${elemento.anagrafica} - ${elemento.url}`;

console.log(output1);

document.querySelector('#output').innerHTML = output1;
