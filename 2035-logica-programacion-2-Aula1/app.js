let numeroSecreto = generarNumSecreto();
let contador = 1;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function generarNumSecreto(){
    return Math.floor((Math.random()*10))+1;
}


function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Adivinaste el numero en ${contador} ${(contador==1)? 'intento':'intentos'}`);
    } else{
        if (numeroSecreto>numeroUsuario) {
            asignarTextoElemento('p','El numero secreto es mayor al ingresado');
        } else {
            asignarTextoElemento('p','El numero secreto es menor al ingresado');
        }
        contador++;
        limpiarCaja();
    }
    return;}



function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


function limpiarCaja (){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';

}

function condicionesIniciales(){

    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','Ingresa un numero del 1 al 10');
    numeroSecreto= generarNumSecreto();
    contador=1;
}

condicionesIniciales();

