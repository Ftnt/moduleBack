function construir(muro) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muro.construido = true;

      //guardar en una variable un resultado
      const error = muro.construido
        ? null
        : new Error('No se pudo construir');

      if (error) {
        reject(error);
        return;
      }

      resolve(muro);
    }, 1000)
  })
}

function aplanar(muro) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muro.aplanado = true;

      //guardar en una variable un resultado
      const error = muro.construido && muro.aplanado
        ? null
        : new Error('No se pudo aplanar');

      if (error) {
        reject(error);
        return;
      }

      resolve(muro);
    }, 1000)
  })
}

function pintar(muro) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muro.pintado = true;

      //guardar en una variable un resultado
      const error = muro.aplanado && muro.pintado
        ? null
        : new Error('No se pudo pintar');

      if (error) {
        reject(error);
        return;
      }

      resolve(muro);
    }, 1000)
  })
}

const muro = {} //obj vacio

// construir(muro)
//   .then((muroContruido) => {
//     console.log('Ya se contruyo:', muroContruido)

//     aplanar(muroContruido)
//       .then((muroAplanado) => {
//         console.log('Ya se aplano:', muroAplanado)

//         pintar(muroAplanado)
//           .then((muroPintado) => {
//             console.log('Ya se pinto:', muroPintado)
//           })
//           .catch((error) => {
//             console.error(error)
//           })

//       })
//       .catch((error) => {
//         console.error(error)
//       })

//   })
//   .catch((error) => {
//     console.error(error)
//   })

construir(muro)
  .then(muro => {
    console.log(muro)
    return aplanar(muro)
  })
  .then((muroAplanado) => {
    console.log(muroAplanado)
    return pintar(muroAplanado)
  })
  .then((muroPintado) => {
    console.log(muroPintado)
  })
  .catch(err => {
    err.message; // 'Batman!'
  })

