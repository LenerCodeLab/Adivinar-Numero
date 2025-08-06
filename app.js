//#region variables
let numeroSecreto = 1;
let numeroDeUsuario = 0;
let contador = 0;
let listaNumeroSecreto = [];
let numeroMaximo = 10;
//#endregion

//#region FUNCIONES
function inicio(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    generarNumeroAleatorio();
    document.getElementById('valorUsuario').focus();
}
function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function verificarIntento(){
    //#region Declaramos variables
    numeroDeUsuario = document.getElementById('valorUsuario').value;
    contador ++;
    //#endregion

    //#region Validamos que ingrese un número distinto de 0 o vacio
    if(numeroDeUsuario == 0 || isNaN(numeroDeUsuario)){
        asignarTextoElemento('p', 'Ingresa un número');
        setTimeout(() => {
        asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
        }, 1500);
        return;
    }
    //#endregion

    //#region Validamos si es mayor menor o igual
    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento('h1', 'Acertaste');
        asignarTextoElemento('p', `Lo hiciste en ${contador} ${contador == 1 ? 'intento' : 'intentos'} el numero es ${numeroSecreto}`);
        document.getElementById('valorUsuario').value = "";
        document.getElementById('intentar').setAttribute('disabled','true');
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    } else if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El número es menor');
    } else{
        asignarTextoElemento('p', 'El número es mayor');
    }
    //#endregion

    //#region Se valida el numero de intentos
    if(contador >= 3){
        asignarTextoElemento('h1', 'Fallaste');
        asignarTextoElemento('p', 'Inicia de nuevo');
        document.getElementById('valorUsuario').value = "";
        document.getElementById('intentar').setAttribute('disabled','true');
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }
    //#endregion

    setTimeout(() => {
        asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
        }, 1500);
    document.getElementById('valorUsuario').value = "";
    document.getElementById('valorUsuario').focus();
    return;
}
function generarNumeroAleatorio(){
    numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;

    if(listaNumeroSecreto.length == numeroMaximo){
        asignarTextoElemento('p', `Ya lograste adivinar todos los números vuelve a intentarlo`);
        listaNumeroSecreto = [];
        document.getElementById('intentar').setAttribute('disabled','true');
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    }else{
        if(listaNumeroSecreto.includes(numeroSecreto)){
            return generarNumeroAleatorio();
        }else{
            console.log(numeroSecreto);
            listaNumeroSecreto.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}
function reiniciar(){
    document.getElementById('reiniciar').setAttribute('disabled','true');
    document.getElementById('intentar').removeAttribute('disabled');
    contador = 0;
    inicio();
}
//#endregion

//#region LLAMO A LAS FUNCIONES
inicio();
//#endregion

//condicionales
// while(numeroDeUsuario != numeroSecreto){
//     numeroDeUsuario = parseInt(prompt("Ingrese el número"));
//     contador ++;
// if(numeroDeUsuario == numeroSecreto){
//     alert('Acertaste');
//     document.getElementById("numero").innerHTML = `Lo hiciste en ${contador} ${contador == 1 ? 'intento' : 'intentos'} el numero es ${numeroSecreto}`;
// } else if(numeroDeUsuario == 0 || isNaN(numeroDeUsuario)){
//     alert('El numero es 0, ingrese un numero');
//     console.log(numeroDeUsuario + "hola");
// } else if(numeroDeUsuario > numeroSecreto){
//     alert('El numero es menor');
//     document.getElementById("numero").innerHTML = "El numero es menor";
// } else{
//     alert(`El numero es mayor`);
//     document.getElementById("numero").innerHTML = "El numero es mayor";
// }
// // palabraIntento = 'intentos';
// }

// // 1 - Muestra una alerta con el mensaje de bienvenida
// alert("¡Bienvenida y bienvenido a nuestro sitio web!");

// // 2 - Declara una variable llamada nombre y asígnale el valor "Lua"
// let nombre = "Lua";

// // 3 - Crea una variable llamada edad y asígnale el valor 25
// let edad = 25;

// // 4 - Establece una variable numeroDeVentas y asígnale el valor 50
// let numeroDeVentas = 50;

// // 5 - Establece una variable saldoDisponible y asígnale el valor 1000
// let saldoDisponible = 1000;

// // 6 - Muestra una alerta con el texto de error
// alert("¡Error! Completa todos los campos");

// // 7 - Declara una variable mensajeDeError y muestra una alerta con su valor
// let mensajeDeError = "¡Error! Completa todos los campos";
// alert(mensajeDeError);

// // 8 - Usa prompt para preguntar el nombre del usuario
// nombre = prompt("¿Cuál es tu nombre?");

// // 9 - Usa prompt para preguntar la edad del usuario
// edad = prompt("¿Cuál es tu edad?");

// // 10 - Si la edad es mayor o igual a 18, muestra un mensaje
// if (edad >= 18) {
// alert("¡Puedes obtener tu licencia de conducir!");
// }

// // 1️⃣ Pregunta qué día de la semana es y responde con un mensaje
// let dia = prompt("¿Qué día de la semana es?");
// if (dia === "Sábado" || dia === "Domingo") {
//   alert("¡Buen fin de semana!");
// } else {
//   alert("¡Buena semana!");
// }

// // 2️⃣ Verifica si un número ingresado por el usuario es positivo o negativo
// let numero = parseFloat(prompt("Ingresa un número"));
// if (numero > 0) {
//   alert("El número es positivo.");
// } else if (numero < 0) {
//   alert("El número es negativo.");
// } else {
//   alert("El número es cero.");
// }

// // 3️⃣ Sistema de puntuación para un juego
// let puntuacion = parseInt(prompt("Ingresa tu puntuación"));
// if (puntuacion >= 100) {
//   alert("¡Felicidades, has ganado!");
// } else {
//   alert("Inténtalo nuevamente para ganar.");
// }

// // 4️⃣ Mensaje de saldo con template string
// let saldo = 750.50;
// alert(`Tu saldo actual es: S/ ${saldo}`);

// // 5️⃣ Bienvenida con el nombre ingresado
// let nombre1 = prompt("Ingresa tu nombre");
// alert(`¡Bienvenido/a, ${nombre1}!`);

