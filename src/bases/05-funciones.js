//Funciones
const saludar= (nombre) => `Hola, ${nombre}`;
console.log(saludar('Juan Jose'));

const getUser = ()=>({uid:'ABC123',username:'EL_MORRIS'})
console.log(getUser())

const getNewUserActivo = (nombre)=>({uid: 'ABC567',username : nombre});
const usuarioActivo = getNewUserActivo('Juanjo Huiza');
console.log(usuarioActivo);