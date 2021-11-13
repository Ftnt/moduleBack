//   `` se llaman template literals
// Declaracion de la funcion
function hola(nombre) {
  return `Hola ${nombre}, saludos..!!`;
}

// Invocacion de la funcion
const saludo = hola('Koders');
console.log(`Saludo: ${saludo}`)

//El tipo de hola es funcion y el tipo de hola('') invocado  es el valor de retorno
console.log(typeof (hola('Odon')))
console.log(typeof (hola))

// Otra funcion puede guardar una referencia de la funcion hola
const otraFuncion = hola;

// Cuanso se invoca otraFuncion se vuelve a ejecutar el codigod de la funcion hola
const otroSaludo = otraFuncion('gente');
console.log(`Otro saludo: ${otroSaludo}`)