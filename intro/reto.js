/* 1. Haz una función que reciba un arreglo de números y retorne el número más grande en el arreglo. Ejemplo: [1, 4, 3, 5, 2] -> 5
Nota: No usar: Math.max ni array.prototype.sort */
const numeros = [1, 2, 3, 4, 5]

function numeroMaximo(datos) {
  let max = 0;
  for (let i = 0; i < datos.length; i++) {
    if (max < datos[i]) {
      max = datos[i];
    }
  }
  console.log(max)
}

numeroMaximo(numeros)

/* 2. Haz una función que revierta un String. Ejemplo: 'hola' -> 'aloh'
Nota: No usar String.reverse */
let dato = "Fernando"

function revertirPalabra(dato) {
  palabra = dato.split('')
  let letras = []
  let total = palabra.length
  for (let index = 0; index <= palabra.length; index++) {
    letras[total] = palabra[index]
    total = total - 1
  }
  let result = letras.join('')
  console.log(result)
}

revertirPalabra(dato)

/* 3. Haz una función que divida dos números a y b. Si b = 0 regresa un mensaje de error.
Ejemplo:  10/2 -> 5
          6/0 -> 'Error' */

function dividir(num1, num2) {
  return num2 === 0 ? 'error' : (num1 / num2)
}

console.log(dividir(6, 0))