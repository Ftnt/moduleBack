const fs = require('fs/promises');

const encoding = 'utf8';

async function createArchivo(nombre, contenido) {
  const result = await fs.writeFile(nombre, contenido, encoding)
  console.log(result);
  console.log('archivo creado');
}

const ejecutar = async () => {
  await createArchivo('ejercico.txt', 'Este es un ejercicio');
  console.log('se ejecutaron todas tus funciones')
}

ejecutar()
