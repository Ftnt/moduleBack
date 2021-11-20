// importar paquete http
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  const metodo = req.method;
  const url = req.url;

  // Definimos todo el header, con writeHead
  res.setHeader('Content-Type', 'text/plain')
  res.statusCode = 200

  if (metodo == 'GET' && url === '/koders') {
    res.write('Aqui esta todos los koders')
  } else if (metodo == 'POST' && url === '/koders') {
    res.write('Aqui puedes crear koders')
  } else {
    res.statusCode = 400
    res.write('No se que hacer aiuda')
  }

  res.end()
})

server.listen(port, () => {
  console.log(`El servidor arranco en el puerto ${port}`)
});