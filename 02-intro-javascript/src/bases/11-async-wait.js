//Async

const getImagen = async() => {
  const apiKey = 'CAbJrlB1hcNzfYwGuD2xojEUIl2kROYr'
  const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`) //Espera a que esta promesa termine para continuar
  const {data} = await resp.json()

  const {url} = data.images.original

  const img = document.createElement('img'); 
  
  img.src = url

  document.body.append( img )

  console.log(data)
}

getImagen()

/* 

//FetchApp
const apiKey = 'CAbJrlB1hcNzfYwGuD2xojEUIl2kROYr'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
.then( resp => resp.json() )
.then(( {data} )  => {
  const { url } = data.images.original
  
  const img = document.createElement('img');
  img.src = url

  document.body.append( img )

})
.catch( console.warn )

 */