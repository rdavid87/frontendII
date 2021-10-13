
const formulario = document.querySelector('form');
const nombre = document.querySelector('#userName');
const email = document.querySelector("#userEmail")
const contrasenia = document.querySelector('#userPassword');
const terminos =  document.querySelector('#userTerminos');
const terminosLabel = document.querySelector("#terminosLabel")

formulario.addEventListener('submit', function (event) {
    // frenar el envío por defecto
    event.preventDefault();

    // validamos
    // validamos el nombre
    if(!validarNombre(nombre.value)){
        // mostrar el error
        nombre.classList.add('error');
    }else{
        nombre.classList.remove('error');
    }
    if(!validarEmail(email.value)){
        email.classList.add('error');
    }else{
        email.classList.remove('error');
    }

    if(!validarPassword(contrasenia.value)){
        contrasenia.classList.add('error');
    }else{
        contrasenia.classList.remove('error');
    }

    if(!terminos.checked){
        terminosLabel.classList.add("unchecked")
    }else{
        terminosLabel.classList.remove("unchecked")
    }


});



function validarNombre(nombre) {
    let resultado = true;
    if(nombre==""){
        resultado=false;
    }else{
        if(nombre.split(" ").length<1){
            resultado=false;
        }else{
            if(nombre.length >25){
                resultado = false;
            }
        }
    }
    

    return resultado;
}

function validarEmail(email){
    var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let resultado = true;
    if(!email.match(mail_format)){
        resultado=false;
    }    
    return resultado;
}

function validarPassword(contrasenia){
    let resultado = true;
    if(contrasenia.length <8 || contrasenia.length>20){
        resultado = false;
    }
    return resultado;
}

