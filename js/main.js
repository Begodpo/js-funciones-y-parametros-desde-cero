"use strict";

// Vamos a crear un repo por persona, y vamos a hacer una función que escriba patata 10 veces en la consola la función se llamará ten()

console.log("ready");

const word = "patata";
const times = 10;

function ten() {
  for (let i = 0; i < times; i++) {
    console.log(word);
  }
}
ten();
