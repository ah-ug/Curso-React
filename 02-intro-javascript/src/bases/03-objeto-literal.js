
const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 555321321,
    lat: 143.232,
    lng: 34.92333321
  }
};

//Operador spread -> ...variable
const persona2 = {...persona}
persona2.nombre = 'Peter'

console.table( persona )
console.log(persona2)