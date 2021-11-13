/* Las funciones en JS son first class citizen significa que pueden ser usadas como cualquier otro tipo de dato .
Esto nos permite guardar funciones en variables y pasarlar como parametro */

// Funcion flecha guardada en una variable
const funcA = (a) => {
  return a * 10
}

// Funcion anonima guardada en una variable
const funcA = function () {
  console.log('a su maquina')
}

/* Las High Order Functions, son funciones que reciben como parametro o retornan otra funcion.
El ejemplo mas comun de ellas es en las callbacks */

function on(ev, funcion) {
  if (ev === 'click') {
    funcion()
  }

}

// Con funcion flecha
button.on('click', () => {
  console.log('hiciste un click')
})

// Definiendo otra funcion
function cheers() {
  console.log('saludos!');
  return 'retorno'
}

// Cual opcion se usa?

button.on('click', cheers());
button.on('click', cheers);  // Esta es la opcion correcta