"use strict";

/*Joé, si puedo pasar a mi función la palabra que quiero escribir, pues voy a querer más: ahora mismo si le paso una palabra me la escribe 10 veces, pero y si quisiese que me la escribiese diferente número de veces cada vez?

Qué tendría que hacer para que al llamar a mi función de estas formas escribiese las palabras el numero de veces que le diga?

ten('patata', 10);
ten('aguacate', 7);
ten('Pizza', 50);

Una vez conseguido renombraremos la función ten a writeThis;*/

function writeThis(word, times) {
  for (let i = 0; i < times; i++) {
    console.log(word, times);
  }
}
writeThis("Patata", 10);
writeThis("Aguacate", 7);
writeThis("Pizza", 50);
