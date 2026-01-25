let clikcs = 0
let clikcsbase = 1
let sonido = new Audio("assets/Eevee_Click.m4a")
sonido.load();
function juego() {
    clikcs += clikcsbase

    sonido.currentTime = 0   
    sonido.play()            
    renderizarcliks()
}

function mejorarclikcs() {
    if (clikcs >= 10) {
        clikcsbase += 1
        clikcs -= 10
    }
    renderizarcliks()
}

function renderizarcliks() {
    document.getElementById("resultadoDisplay").innerText = clikcs
}
