// importar paquete http
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  const metodo = req.method;
  const url = req.url;

  // Definimos todo el header, con writeHead
  res.setHeader('Content-Type', 'text/json')
  res.statusCode = 200

  // Convierte un objeto, un array a un JSON
  const mensaje = {
    message: '',
  }

  if (metodo == 'GET' && url === '/koders') {
    mensaje.message = 'Aqui esta todos los koders';
  } else if (metodo == 'POST' && url === '/koders') {
    mensaje.message = 'Aqui puedes crear koders';
  } else {
    res.statusCode = 400;
    mensaje.message = 'No se que hacer aiuda';
  }

  const respuesta = JSON.stringify(mensaje)
  res.write(respuesta)
  res.end()
})

server.listen(port, () => {
  console.log(`El servidor arranco en el puerto ${port}`)
});