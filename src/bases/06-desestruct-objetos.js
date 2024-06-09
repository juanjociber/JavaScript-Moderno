//Desestructuración
const persona ={
    nombre :'Juan',
    edad : 46,
    clave: 'Morris',
    rango : 'Soldado'
}


const retornaUsuario = ({clave,nombre, edad,rango='Capitán'})=>{
    
    //console.log(nombre,edad,rango)

    return{
        nombreClave :clave,
        anios: edad,
        latlng:{
            lat:12.9292,
            lng: 12.9833
        }
    }
}
const {nombreClave,anios,latlng:{lat,lng}} = retornaUsuario(persona);
console.log(nombreClave,anios);
console.log(lat,lng);