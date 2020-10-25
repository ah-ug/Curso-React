//Funciones

const saludar = function( nombre ){
  return `Hola, ${ nombre }`
} 

const saludar2 = ( nombre ) => {
  return `Hola, ${ nombre }`
}

const saludar3 = ( nombre ) => {
  return `Hola, ${ nombre }`
}

const saludar4 = ( nombre ) => `Hola Mundo`
 
console.log( saludar('Goku') )
console.log( saludar2('Vegeta') )
console.log( saludar3('Goku') )
console.log( saludar4() );

//Objeto implicito
const getUser = () =>  
({
  uid: 'ABC123',
  username: 'El_papi1502'
});

console.log( getUser())

// Tarea
// 1. Transformen a una funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
const getUsuarioActivo = (nombre) => ( {
    uid: 'ABC567',
    username: nombre
  }
);

const usuario = getUsuarioActivo('Fernando')
console.log( usuario )