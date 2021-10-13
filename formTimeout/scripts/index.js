// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.
const formulario = document.querySelector("form");
const inputEmail = document.querySelector("#email-input");
const inputPassword = document.querySelector("#password-input");
const labelLoad = document.querySelector("#loader");
const labelError = document.querySelector("#error-container");

window.onload = function() {
  if(localStorage.getItem("session")!=null){
    if(localStorage.getItem("session")){
      goMenu();
    }
  }
};

formulario.addEventListener('submit', function(event){
  event.preventDefault();
  if(labelError.className!=="hidden"){
    labelError.classList.add("hidden");
  }
  //setTimeout(respuestaServer, 3000, inputEmail.value, inputPassword.value);
  labelLoad.classList.remove("hidden");
  const espera = ms => new Promise(resuelve => setTimeout(resuelve, ms));
  espera(3000).then(() => enviaServidor(inputEmail.value, inputPassword.value)).catch(falloCallback);

  
});

function enviaServidor(userEmail, userPassword){
  let respuesta= respuestaServer(userEmail, userPassword)
  if(respuesta.error==""){
    console.log((respuesta.data[0]));
      labelLoad.classList.add("hidden");
      localStorage.setItem("session", true);
      localStorage.setItem("usuario", JSON.stringify(respuesta.data[0]));
      goMenu();
  }else{
    labelLoad.classList.add("hidden");
    labelError.classList.remove("hidden");
    labelError.textContent=respuesta.error;
  }
}

function falloCallback(){
  console.log("Falla de comunicación con el servidor!");
  labelError.classList.remove("hidden");
}

function goMenu(){
  window.location.replace("./main.html");
}

// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.



function respuestaServer(userEmail, userPassword){
  let respuesta = {
    error: "",
    data: [],
  }
  baseDeDatos["usuarios"].forEach(value => {
    if(value.email==userEmail && value.password == userPassword){
      const user={
        "id":value.id,
        "name": value.name,
        "email": value.email,
      };
      
      respuesta.data.push(user);
      
    }
  })
  if(respuesta.data.length<1){
    respuesta.error="Datos de usuario no encontrados en la Base de Datos"
  }
  return respuesta;
}
// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */
