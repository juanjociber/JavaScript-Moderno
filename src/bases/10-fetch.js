const apiKey = 'bwtDXYBwKI3MXstCGZFs7iPqQmpjaYZx';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
peticion
    .then(resp => resp.json())
    .then(({data}) =>{
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        console.log(img)
    })

.catch(console.warn);