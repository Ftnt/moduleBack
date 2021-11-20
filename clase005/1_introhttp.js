// importar paquete http
const http = require('http');

// Creamos un servidor, usando createServer

/* const server = http.createServer((req,res) => {
  // Definimos todo el header, con writeHead
  res.writeHead(200,{'Content-Type':'application/json'})
  //
  res.end(
    JSON.stringify({
      data:'Hellos World!'
    })
  )
}) */

const server = http.createServer((req, res) => {
  const metodo = req.method;
  console.log(metodo);

  const url = req.url;
  console.log(`URL: ${url}`);
  // Definimos todo el header, con writeHead
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')

  res.write('Hello Word..!!')
  res.end('No se que hacer aiuda')
})

server.listen(3000, () => {
  console.log('El servidor arranco en el puerto 3000')
});