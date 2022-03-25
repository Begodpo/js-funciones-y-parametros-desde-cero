"use strict";

/*Ahora ya tenemos un poco más controlado el invento y parece que podemos controlar diferentes resultados de funciones según los valores que le pasemos a sus parámetros…

Alguien se ha dado cuenta de que estamos escribiendo las palabras que queremos y ha dicho: Ey, yo no tengo una o dos palabras, pero tengo una lista de palabras y números. ¿Me la podríais escribir?

La lista es la siguiente:
const myWordList =  [
  {
    text: 'Pencil',
    total: 6
  },
  {
    text: 'Thermo',
    total: 2
  },
  {
    text: 'TV',
    total: 8
  },
  {
    text: 'Phone',
    total: 4
  }
];
Para ello crearemos una nueva función writeMyArray que aceptará como parámetro un array, lo recorrerá y escribirá cada palabra el número de veces indicado utilizando nuestra función writeThis.*/
const myWordList = [
  {
    text: "Pencil",
    total: 6,
  },
  {
    text: "Thermo",
    total: 2,
  },
  {
    text: "TV",
    total: 8,
  },
  {
    text: "Phone",
    total: 4,
  },
];

function writeThis(word, times) {
  for (let i = 0; i < times; i++) {
    console.log(word);
  }
}
function writeMyArray(array) {
  for (const item of array) {
    writeThis(item.text, item.total);
  }
}

writeMyArray(myWordList);
