//Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks']
const [ , p1] = personajes;
console.log(p1)

const retornaArreglo = () =>{
  return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)


//Tarea
// 1. El primer valor del arr se llamará nombre
// 2. Se llamara setNombre
const estado = ( valor ) => {
  return [ valor, () =>{ console.log('Hola Mundo') } ];
}

const [nombre, setNombre ] = estado ('Goku')

console.log(nombre)
setNombre()