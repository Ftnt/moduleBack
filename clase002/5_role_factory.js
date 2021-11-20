// Recibe una lista de roles, que regresa?
function generateRoleValidator(roles) {
  return (rol) => {
    if (roles.includes(rol)) {
      console.log('autorizado')
    } else {
      console.log('denegado')
    }
  }
}

const onlyAdmin = generateRoleValidator(['admin'])
const onlyUserAndAdmin = generateRoleValidator(['admin', 'user'])
const onlyDev = generateRoleValidator(['desarrollador'])
onlyAdmin('desarrollador')
onlyAdmin('admin')
onlyUserAndAdmin('user')
onlyDev('asdmin')

const usuarios = [
  {
    nombre: 'Jairo',
    rol: 'admin'
  },
  {
    nombre: 'Balan',
    rol: 'calidad'
  },
  {
    nombre: 'Odon',
    rol: 'desarrollador'
  },
  {
    nombre: 'Luis',
    rol: 'desarrollador'
  },
]

const listaUsuario = usuarios.map(({ rol }) => rol)

console.log(listaUsuario)

const usuariosValidos = ['admin', 'desarrollador', 'calidad'];
const validateUsers = generateRoleValidator(usuariosValidos)

const productosValidos = ['sabritas', 'switch'];
const validateDeProductos = generateRoleValidator(productosValidos)
