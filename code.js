let clikcs = 0
let clikcsbase = 1

function juego(){
    clikcs += clikcsbase
   renderizarcliks()
}
function mejorarclikcs() {
    if(clikcs >= 10){
        clikcsbase += 1
        clikcs -=10
    }
   renderizarcliks()
}
function renderizarcliks(){
document.getElementById("resultadoDisplay").innerText= clikcs
}