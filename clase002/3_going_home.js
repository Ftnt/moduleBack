// Una accion que no sabemos cuando terminara exactamente
function irCasa(callback) {
  console.log('camino a casa...');
  console.log('llegue a casa...')
  callback != undefined ? callback() : console.log('No hizo nada')
}

function avisar() {
  console.log('ya llegue');
}

function dormir() {
  console.log('a mimir');
}

//Como irian a casa y luego avisarian
irCasa(avisar)

//Como dormir y luego ir a casa
dormir();
irCasa();