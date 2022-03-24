"use strict";

//Ahora tenemos una función que nos escribe patata 10 veces en la consola cada vez que la llamemos, pero eso, dentro de lo que cabe, es poco útil porque ahora que sé que puedo escribir una palabra 10 veces en la consola lo que me gustaría es poder escribir palabras diferentes.

//Entonces, vamos a modificar nuestra función ten() para que acepte un parámetro word, y vamos a llamar a la función 3 veces, pasándole cada vez una palabra diferente:

// ten('Patata`);
// ten('Aguacate`);
// ten('Pizza');

const times = 10;

function ten(word) {
  for (let i = 0; i < times; i++) {
    console.log(word);
  }
}
ten("Patata");
ten("Aguacate");
ten("Pizza");
