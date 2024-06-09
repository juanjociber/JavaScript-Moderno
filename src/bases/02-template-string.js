const nombre ='Juan';
const apellido = 'Huiza';

const nombreCompleto = `Mi nombre completo es: 
${nombre} 
${apellido}`;
console.log(nombreCompleto);


function getSaludo(nombre){
    return 'Hola' + nombre
}

console.log(`Este es un texto ${getSaludo(' Juan Huiza')}`)