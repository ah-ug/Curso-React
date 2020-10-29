
export const getImagen = async() => {

    try {
        const apiKey = 'CAbJrlB1hcNzfYwGuD2xojEUIl2kROYr'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`) //Espera a que esta promesa termine para continuar
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No existe';
    } 
    
}

 getImagen();



