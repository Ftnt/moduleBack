// Tenemos tres acciones que debe hacerse una despues de otra

function construir(muro) {
  console.log('construyendo...')
  setTimeout(() => {
    muro.construido = true;
  }, 500)
  return muro;
}

function aplanar(muro) {
  console.log('aplanando...')
  setTimeout(() => {
    muro.aplanado = true;
  }, 200)
  return muro;
}

function pintar(muro) {
  console.log('pintando...')
  setTimeout(() => {
    muro.pintando = true;
  }, 700)
  return muro;
}

const muro = {
  construido: false,
  aplanado: false,
  pintando: false,
}

console.time('const')
const muroConstruido = construir(muro);
console.timeEnd('const')
console.time('aplanar')
const muroAplanado = aplanar(muroConstruido);
console.timeEnd('aplanar')
console.time('pintar')
const muroPintado = pintar(muroAplanado);
console.timeEnd('pintar')
console.log(muroPintado)