//Desestructuración
//Asignación desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango: 'Soldado',
};

//Extraer el valor de un objeto (No importa el orden de la estructura)
//const { nombre, edad, clave } = persona;

/* console.log( nombre );
console.log( edad );
console.log( clave ); */

const getPersona = ( {clave, nombre, edad, rango = 'Capitan'} ) => {

  //console.log(nombre, edad, rango)

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.2685,
      lng: -9.5645
    }
  }
}

const {nombreClave, anios, latlng:{lat, lng} } = getPersona(persona)

console.log(nombreClave, anios)
console.log(lat, lng)

