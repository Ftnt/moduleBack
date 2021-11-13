const fs = require('fs');

fs.writeFile('..s/hola.txt', 'Hola desde Koder', 'utf8', (error) => {
  error
    ? console.error('Error', error)
    : console.log('Se creo el archivo correctamente')
})


//Firma mas comun de un callback
function callback(error, data) {
  if (error) {
    //panic..!!
  }
  // happy..!!
}