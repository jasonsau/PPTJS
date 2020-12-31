(()=>{
    btnIniciarJuego.addEventListener('click', (e)=>{
        jugador = document.getElementById("id-jugador");
        if(jugador.value === ""){
            document.getElementById("error-vacio").classList.remove("display-type-none");
        }
        else{
            document.getElementById("error-vacio").classList.add("display-type-none");
            jugador.setAttribute("class", "display-type-none");
            btnIniciarJuego.setAttribute("class", "display-type-none");
            mostrarMarcador();
            mostrarOpcionesDeJuego();
            startGame();
        }
    });

})();
