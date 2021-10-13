const newsNacionales = document.querySelector(".news-nacionales");
const newsInternacionales = document.querySelector(".news-internacionales");
cargaNoticias();

function cargaNoticias(){
    noticias.forEach(value => {
        let plantilla = `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0 align-items-center">
            <div class="col-md-4">
            <img class="img-fluid rounded-start" src="${value.imgUrl}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${value.titulo}</h5>
              <p class="card-text">${value.descripcion}</p>
              <p class="card-text"><small class="text-muted">Actualiado el ${value.fecha}</small></p>
            </div>
          </div>
        </div>
      </div>`;
        if(value.tipoNacional){
            newsNacionales.innerHTML+=plantilla;
        }else{
            newsInternacionales.innerHTML+=plantilla;
        }
    })

}