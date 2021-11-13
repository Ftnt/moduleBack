function factory(result) {
  console.log('Trabajando...');

  return function () {
    console.log('resultado:', result)
  }
}

const r = factory('saludos')

//Que tipo es r?
r()

//Caso muy visto en programacion funcional
function factorySumaParcial(a) {
  return function (b) {
    return a + b
  }
}

const suma2 = factorySumaParcial(2)
console.log(suma2(5))


