function mostrarMensaje(){
    document.getElementById("mensaje").innerHTML = "Bienvenido a nuestra tienda Motos Cyber Redes";
}

function resaltar(card){
    card.style.backgroundColor = "lightblue";
}

function restaurar(card){
    card.style.backgroundColor = "white";
}

let imagenes = [
    "kawa1.jpg",
    "kawa2.jpg",
    "kawa3.jpg",
]

let posicion = 0;

function anterior(){
    posicion --;

    if(posicion < 0){
        posicion = imagenes.length -1;
    }
    document.getElementById("imagen").src = imagenes[posicion];
}

function siguiente(){
    posicion++;

    if(posicion>= imagenes.length){
        posicion = 0;
    }
    document.getElementById("imagen").src = imagenes[posicion];
}

function validarFormulario(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();

    const errorElemento = document.getElementById("errorMensaje");
    const exitoElemento = document.getElementById("exitoMensaje");

    errorElemento.textContent = "";
    exitoElemento.textContent = "";

    if (nombre === "" || email === "" || asunto === "") {
        errorElemento.textContent = "Por favor, debe llenar los campos vacios";
        return;
    }

    exitoElemento.textContent = "Formulario enviado correctamente";

    document.getElementById("formularioContacto").reset();
}