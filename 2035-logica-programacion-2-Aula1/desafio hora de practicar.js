


function saludo(){
    console.log("Hola, mundo");
}

function saludoPersonalizado(nombre){
    console.log(`!Hola, ${nombre}!`);
}


function duplicador (number){
    let num = parseInt(prompt(number));
    console.log(typeof(num));
    return 2*num;
}

function promediador(n1, n2, n3){
    return (n1+n2+n3)/3;
}

function seleccionarMayor (num1, num2){
    if (num1>num2){
        return num1;
    } else {
        return num2;
    }
}