//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos,
// que se recibirán como parámetros.

function calculoImc(peso, altura){
    let imc = peso/(altura*altura);
    return imc
}
//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(numero){
    let resp = numero
    while(numero!=1){
        numero--;
        resp=resp*numero;
    }
    return resp;
}

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales
//(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
//4.8 reales = 1 dolar

function conversorAReales(dolares){
    return dolares*4.8
}

//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura 
//y la anchura que se proporcionarán como parámetros.

function rectangulo(altura,anchura){
    let area = altura*anchura;
    console.log(area)
    let perimetro = (2*altura)+(2*anchura)
    console.log(perimetro)
    return area,perimetro
}


//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se 
//proporcionará como parámetro. Considera Pi = 3,14.

function circulo(radio){
    let pi = 3.14
    let area= pi*radio*radio;
    let perimetro = 2*pi*radio;
    console.log(area)
    console.log(perimetro)
}


//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablas(numero){
    let factor2=0;
    while(factor2!=10){
        factor2++;
        let mult= factor2*numero;
        return `${numero} * ${factor2} = ${mult}`
    }
    return `${numero} * ${factor2} = ${mult}`
}
alert(tablas(5));



