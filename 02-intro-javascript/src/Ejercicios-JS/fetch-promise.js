//Fetch de una API cutilizando promise

const peticion = fetch(`https://api.thecatapi.com/v1/images/search`)

peticion
.then( resp => resp.json() )
.then( data =>{
    console.log(data)
})
