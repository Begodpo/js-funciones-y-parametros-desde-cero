"use strict";

/*Ahora que hemos conseguido eso, aparece una compañera y nos dice: ey, si podéis hacer eso, yo tengo una API que me devuelve algo muy parecido, podría pasaros la url para que en lugar de tirar de un array metido a fuego y azufre en el código, tirásemos de los datos que nos devuelve un servidor. ¿sí?

URL: https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json

Para ello tenemos que saber usar fetch.

¡Al turrón!*/

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

const getDataFromApi = () => {
  fetch(
    "https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json"
  )
    .then((response) => response.json())
    .then((data) => writeMyArray(data.results));
};

getDataFromApi();
