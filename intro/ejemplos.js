let a = 'a';
let b = 2;
const c = 'mucho text';
var d = true

console.log(a, b, c)

for (let index = 0; index < 10; index++) {
    console.log(index)
}

if (d) {
    console.log('true')
} else {
    console.log('nunca se imprimira')
}

// Funciones
const f = () => {
    console.log('funcion flecha')
}

const f2 = function () {
    console.log('funcion anonima')
}

function f3(x) {
    console.log(x)
    return x ** x
}

console.log(f3(3))
