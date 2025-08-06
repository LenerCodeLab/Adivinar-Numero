//variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let contador = 0;
// let palabraIntento = 'intento';
/*
varias lineas
*/
while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt("Ingrese el número"));
    contador ++;
if(numeroUsuario == numeroSecreto){
    alert('Acertaste');
    document.getElementById("numero").innerHTML = `Lo hiciste en ${contador} ${contador == 1 ? 'intento' : 'intentos'} el numero es ${numeroSecreto}`;
} else if(numeroUsuario == 0 || isNaN(numeroUsuario)){
    alert('El numero es 0, ingrese un numero');
    console.log(numeroUsuario + "hola");
} else if(numeroUsuario > numeroSecreto){
    alert('El numero es menor');
    document.getElementById("numero").innerHTML = "El numero es menor";
} else{
    alert(`El numero es mayor`);
    document.getElementById("numero").innerHTML = "El numero es mayor";
}
// palabraIntento = 'intentos';
}

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

