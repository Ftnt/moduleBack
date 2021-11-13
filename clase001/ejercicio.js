/* Implementar la funcion filter */

const arreglo = [2, 3, 4, 5];
const texto = ['a', 'b', 'c'];

//Si el callback retorna verdadero,anade el valor al resultado
//Si el callback retorna falso ignora el valor
function filter(arreglo, callback) {
  const resultado = []
  arreglo.forEach(element => {
    callback(element) ? resultado.push(element) : ''
  });
  return resultado
}

// El callback debe de recibir un numero o valor que sera un elemento del arreglo
const rslt = filter(arreglo, x => x % 2 === 0);
const soloUno = filter(arreglo, x => x === 1)

console.log(rslt)
console.log(soloUno)