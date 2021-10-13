const cerrar = document.querySelector(".cerrar");
const bienvenido = document.querySelector(".bienvendio");

window.onload = function() {
    if(localStorage.getItem("session")!=null){
        if(localStorage.getItem("session")){
        let datos = JSON.parse(localStorage.getItem("usuario"));
        console.log(datos)
        bienvenido.textContent="Bienvendio "+datos.name+" 😀";
        }else{
            salir();
        }
    }else{
        salir();
    }
};

cerrar.addEventListener('click', function(e){
    salir();
})

function salir(){
    localStorage.clear();
    window.location.replace("./index.html");
}