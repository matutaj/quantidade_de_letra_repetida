
// Saber a quantidade de letra existetente em uma palavra;


const palavra = "Praticando JavaScript".toLowerCase();
let letras = {};

for (let i = 0; i < palavra.length; i++) {

    if (letras[palavra[i]]) {

        letras[palavra[i]]++;

    } else {

        letras[palavra[i]] = 1;
    }
}
console.log(letras)