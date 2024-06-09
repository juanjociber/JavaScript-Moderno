//const getImagenPromesa = ()=> new Promise(resolve=>resolve('https://asasas.com'));

const getImagen = async()=>{

    try {
        const apiKey = 'bwtDXYBwKI3MXstCGZFs7iPqQmpjaYZx'; 
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
        const { data } = await respuesta.json();
        
        const { url } = data.images.original;
        
        const tagImagen = document.createElement('img');
        tagImagen.src = url
        document.body.append(tagImagen)    
    } catch (error) {
        //manejo del erorr
        console.log(error);
    }
}

getImagen();




