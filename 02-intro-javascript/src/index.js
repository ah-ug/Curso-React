//Fetch de una API cutilizando promise


const peticion = fetch(`https://api.thecatapi.com/v1/images/search`)

peticion
.then( resp => resp.json() )
.then( data =>{

  const url = data.data

  const img = document.createElement('imagen')
  img.src = url
  document.body.append( img )

  console.log(data)
})
