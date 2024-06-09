const persona ={
    nombre: 'Tony',
    apellido: 'Stark',
    edad : 45,
    direccion : {
        ciudad: 'New York',
        zip: 55533434,
        lat: 14.3232,
        lng:34.982392
    }
};
console.log(persona);

const persona2 = {...persona};

console.log(persona2);
