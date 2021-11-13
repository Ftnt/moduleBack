/*
  Usar unlink que aparece en
  create = writeFile
  read = readFile
  update = appendFile
  delete = unlink
*/

const fs = require('fs');

function crearArchivo(archivo, contenido, callback) {
  fs.writeFile(archivo, contenido, 'utf8', callback)
}

function leerArchivo(archivo, callback) {
  fs.readFile(archivo, 'utf8', callback);
}

function editarArchivo(archivo, contenido, callback) {
  fs.appendFile(archivo, contenido, callback)
}

function borrarArchivo(archivo, callback) {
  fs.unlink(archivo, callback);
}

// crearArchivo('Ejercicio.txt', 'Este sera el ejercicio', (error) => {
//   error
//     ? console.error('Error', error)
//     : console.log('Se creo correctamente..!!')
// })

// leerArchivo('Ejercicio.txt', (error, data) => {
//   error
//     ? console.error('Error', error)
//     : console.log('Data:', data)
// })

// editarArchivo('Ejercicio.txt', 'Esto es una modificacion',
//   (error) => {
//     error
//       ? console.error('Error', error)
//       : console.log(' Añadiendo data..!!')
//   });

// borrarArchivo('Ejercicio.txt', (error) => {
//   error
//     ? console.error('Error', error)
//     : console.log('Documento Eliminado..!!')
// })
