

const nombre = 'Arturo'
const apellido = 'Urra'

const nombreCompleto = `${ nombre } ${ apellido }`

console.log(nombreCompleto)

function getSaludo(nobre) {
  return 'Hola ' + nombreCompleto
}

console.log( `Este es un texto: ${getSaludo(nombre) } `)