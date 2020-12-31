//Lectura de datos
let jugador = ""
let btnIniciarJuego = document.getElementById("id-comenzar");
let containerHeader = document.getElementsByClassName("container-header");
let contadorUsuario = 0;
let contadorMaquina = 0;
let eleccionJugador;
let marcadorMaquina;
let marcadorUsuario;
let opcionSeleccionadoJugador;
let strResultado;

function mostrarMarcador(){
    let template = `<h2 class = "font">Puntuacion</h2>
        <label class = "font" id = "contador-usuario">${jugador.value}: ${contadorUsuario}</label>
        <label class = "font" id = "contador-maquina">Maquina ${contadorMaquina}</label>`;
    containerHeader[0].innerHTML = template;
}

function mostrarOpcionesDeJuego(){
    document.getElementsByClassName("opcion")[0].classList.remove("display-type-none");
    document.getElementsByClassName("opcion")[0].classList.add("display-type-flex", "container-header", "fadeIn")
}

function startGame(){
    eleccionJugador = document.querySelectorAll("[tipo-objeto]");
    marcadorUsuario = document.getElementById("contador-usuario");
    marcadorMaquina = document.getElementById("contador-maquina");

    for(let posicion = 0; posicion<eleccionJugador.length; posicion++){
        eleccionJugador[posicion].addEventListener('click', (e)=>{
        opcionSeleccionadoJugador = eleccionJugador[posicion].getAttribute("tipo-objeto")
            ejecutarOpcion(opcionSeleccionadoJugador);
        })
    }
}

function ejecutarOpcion(opcionJugador){
    opcionMaquina = Math.floor(Math.random()*3)+1;
    let resultado = juegoPiedraPapelTijera(opcionJugador, opcionMaquina);
    ocultarOpcionesNoSeleccionadasJugador();
    ocultarOpcionesNoSeleccionadasMaquina();
    aumentarPuntuacion(resultado);

    //Muestra de nuevo las opciones al jugador
    let btnDeNuevo = document.getElementById("btn-de-nuevo");
    btnDeNuevo.classList.remove("display-type-none");
    btnDeNuevo.addEventListener('click', (e)=>{
        mostrarOpcionesNoSeleccionadasMaquina();
        mostrarOpcionesNoSeleccionadasJugador();
        btnDeNuevo.classList.add("display-type-none");
    })
    document.getElementById("resultado-partida").innerHTML =strResultado;
}

function juegoPiedraPapelTijera(opcionJugador, opcionMaquina){
    if (opcionJugador == opcionMaquina){
        strResultado = "Ha sido un Empate";
        return "Empate";
    }
    else if((opcionJugador ==  1 && opcionMaquina == 3) || (opcionJugador == 2 && opcionMaquina == 1) || (opcionJugador == 3 && opcionMaquina == 2)){
        strResultado = `Ha ganado ${jugador.value}`;
        return "GanaUsuario";
    }
    else {
        strResultado = `Ha ganado la Maquina`;
        return "GanaMaquina";
    }
}

function aumentarPuntuacion(resultado){
    if(resultado == "Empate"){
    }
    else if(resultado == "GanaUsuario"){
        contadorUsuario = contadorUsuario + 1;
        marcadorUsuario.innerHTML = `${jugador.value}: ${contadorUsuario}`;
    }
    else{
        contadorMaquina = contadorMaquina + 1;
        marcadorMaquina.innerHTML = `Maquina: ${contadorMaquina}`;
    }
}



function ocultarOpcionesNoSeleccionadasJugador(){
    console.log(opcionSeleccionadoJugador)
    switch(opcionSeleccionadoJugador){
        case "1":
            document.querySelectorAll("[tipo-objeto]")[1].style.visibility="hidden";
            document.querySelectorAll("[tipo-objeto]")[2].style.visibility="hidden";
        break;
        case "2":
            document.querySelectorAll("[tipo-objeto]")[0].style.visibility="hidden";
            document.querySelectorAll("[tipo-objeto]")[2].style.visibility="hidden";
        break;
        case "3":
            document.querySelectorAll("[tipo-objeto]")[0].style.visibility="hidden";
            document.querySelectorAll("[tipo-objeto]")[1].style.visibility="hidden";
        break;
    }
}
function ocultarOpcionesNoSeleccionadasMaquina(){
    console.log(opcionSeleccionadoJugador)
    switch(opcionMaquina){
        case 1:
            document.querySelectorAll("[tipo-objeto]")[4].style.visibility="hidden";
            document.querySelectorAll("[tipo-objeto]")[5].style.visibility="hidden";
        break;
        case 2:
            document.querySelectorAll("[tipo-objeto]")[3].style.visibility="hidden";
            document.querySelectorAll("[tipo-objeto]")[5].style.visibility="hidden";
        break;
        case 3:
            document.querySelectorAll("[tipo-objeto]")[3].style.visibility="hidden";
            document.querySelectorAll("[tipo-objeto]")[4].style.visibility="hidden";
        break;
    }
}


function mostrarOpcionesNoSeleccionadasMaquina(){
    console.log(opcionSeleccionadoJugador)
    switch(opcionMaquina){
        case 1:
            document.querySelectorAll("[tipo-objeto]")[4].style.visibility="visible";
            document.querySelectorAll("[tipo-objeto]")[5].style.visibility="visible";
        break;
        case 2:
            document.querySelectorAll("[tipo-objeto]")[3].style.visibility="visible";
            document.querySelectorAll("[tipo-objeto]")[5].style.visibility="visible";
        break;
        case 3:
            document.querySelectorAll("[tipo-objeto]")[3].style.visibility="visible";
            document.querySelectorAll("[tipo-objeto]")[4].style.visibility="visible";
        break;
    }
}

function mostrarOpcionesNoSeleccionadasJugador(){
    console.log(opcionSeleccionadoJugador)
    switch(opcionSeleccionadoJugador){
        case "1":
            document.querySelectorAll("[tipo-objeto]")[1].style.visibility="visible";
            document.querySelectorAll("[tipo-objeto]")[2].style.visibility="visible";
        break;
        case "2":
            document.querySelectorAll("[tipo-objeto]")[0].style.visibility="visible";
            document.querySelectorAll("[tipo-objeto]")[2].style.visibility="visible";
        break;
        case "3":
            document.querySelectorAll("[tipo-objeto]")[0].style.visibility="visible";
            document.querySelectorAll("[tipo-objeto]")[1].style.visibility="visible";
        break;
    }

}
