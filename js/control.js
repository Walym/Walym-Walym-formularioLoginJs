const username = document.getElementById('username');
const password = document.getElementById('password');
const btn = document.getElementById('btnAceptar');

const validarVacio = (campo, nombre) => {
    if(campo.value==''){
        campo.setCustomValidity(`El campo ${nombre} no debe estar vacio`);
        return true;
    } 
}

const validarContenido = (campo, nombre, caracter) => {
    if(campo.value.indexOf(caracter)==-1){
        campo.setCustomValidity(`El campo ${nombre} debe contener al menos un ${caracter}`);
        return true;
     }
}

const validarPosicion = (campo, nombre, caracter) => {
    let str = campo.value;
    let pos = str.indexOf(caracter);
    let tam = str.length;
    if(pos==0 || pos==tam-1){
        campo.setCustomValidity(`El ${caracter} no debe estar al inicio o al final del campo ${nombre}`);
        return true;
     }
}
const validarTam = (campo, nombre, min, max) => {
   let str = campo.value;
   if(str.length>max || str.length<min){
    campo.setCustomValidity(`El campo ${nombre} debe tener un mínimo de ${min} y máximo de ${max} caracteres`);
    return true;
   }
}
const contiguos = (campo, nombre, caracter1, caracter2) => {
    let str = campo.value;
    let pos1 = str.indexOf(caracter1);
    let pos2 = str.indexOf(caracter2);

    if(pos1+1==pos2 || pos1-1==pos2){
        campo.setCustomValidity(`El ${caracter1} y el ${caracter2} no debe estar contiguos en el ${nombre}`);
        return true;
     }
}

btn.addEventListener('click', (e)=>{
    // e.preventDefault();
    console.table([username.value, password.value]);  
    username.setCustomValidity('');
    password.setCustomValidity('');


    if(validarVacio(username, 'Email')) return;
    if(validarContenido(username, 'Email', '@')) return;
    if(validarPosicion(username, 'Email', '@')) return;
    if (validarContenido(username, 'Email', '.')) return;
    if (validarPosicion(username, 'Email', '.')) return;
    if(contiguos(username, 'Email', '@','.')) return;
    if(validarTam(username, 'Email', 5, 25)) return;
    if(validarVacio(password, 'Password')) return;
    if(validarTam(password, 'Password', 3, 6)) return;

});