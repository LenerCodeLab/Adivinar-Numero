<div align="center">

# 🔢 El Juego del Número Secreto 🎯

Una aplicación web donde debes adivinar un número aleatorio entre 1 y 10 en máximo 3 intentos.

### 🚀 Proyecto desarrollado en el programa Oracle ONE & Alura

<img width="300" alt="web" src="https://github.com/user-attachments/assets/d9d47e42-8f3e-49e6-a436-188f3232febc" />

<p>
<img src="https://img.shields.io/badge/STATUS-FINISHED-green">
</p>

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()

</div>

---

## 📌 Descripción

**El Juego del Número Secreto** es una aplicación interactiva donde el jugador debe adivinar un número aleatorio entre 1 y 10. El juego informa si el número ingresado es mayor o menor que el número secreto y solo permite 3 intentos por ronda. Si aciertas, puedes reiniciar el juego y continuar adivinando nuevos números.

🔗 [Ver aplicación en vivo](https://lenercodelab.github.io/Adivinar-Numero/)  
📁 [Ver repositorio en GitHub](https://github.com/LenerCodeLab/Adivinar-Numero)

---

## ✨ Funcionalidades

- 🔢 Generación aleatoria de un número del 1 al 10 sin repeticiones hasta completar la lista.
- 📉 Indicación si el número ingresado es mayor o menor al número secreto.
- ⛔ Máximo 3 intentos por número.
- 🔁 Opción de reiniciar el juego con un nuevo número aleatorio.
- 🧠 Validación de entrada para evitar vacíos o valores no numéricos.
- 🎨 Interfaz amigable, moderna y adaptable.

---

## 🎮 ¿Cómo jugar?

1. Escribe un número entre 1 y 10 en el campo de entrada.
2. Haz clic en el botón **"Intentar"**.
3. Recibe una pista: si el número es mayor o menor al secreto.
4. Solo tienes 3 intentos.
5. Si ganas o pierdes, podrás hacer clic en **"Nuevo juego"** para reiniciar.

📸 Captura del juego:  
<img src="https://github.com/user-attachments/assets/6b081893-8bcd-4102-8b4f-393958123556" width="600"/>

---

## 🧠 Lógica implementada

### Generador de Número Aleatorio

```js
function generarNumeroAleatorio() {
  numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;

  if (listaNumeroSecreto.length == numeroMaximo) {
    asignarTextoElemento(
      "p",
      `Ya lograste adivinar todos los números vuelve a intentarlo`
    );
    listaNumeroSecreto = [];
    document.getElementById("intentar").setAttribute("disabled", "true");
    document.getElementById("reiniciar").removeAttribute("disabled");
    return;
  } else {
    if (listaNumeroSecreto.includes(numeroSecreto)) {
      return generarNumeroAleatorio();
    } else {
      console.log(numeroSecreto);
      listaNumeroSecreto.push(numeroSecreto);
      return numeroSecreto;
    }
  }
}
```

- Se utiliza `Math.random()` para generar el número.
- Se valida que no se repita usando un array (`listaNumeroSecreto`).
- Se verifica si el número es correcto, mayor o menor.
- Se controla el número de intentos con un contador.

### Varificación de número ingresado

```js
function verificarIntento() {
  //#region Declaramos variables
  numeroDeUsuario = document.getElementById("valorUsuario").value;
  contador++;
  //#endregion

  //#region Validamos que ingrese un número distinto de 0 o vacio
  if (numeroDeUsuario == 0 || isNaN(numeroDeUsuario)) {
    asignarTextoElemento("p", "Ingresa un número");
    setTimeout(() => {
      asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    }, 1500);
    return;
  }
  //#endregion

  //#region Validamos si es mayor menor o igual
  if (numeroDeUsuario == numeroSecreto) {
    asignarTextoElemento("h1", "Acertaste");
    asignarTextoElemento(
      "p",
      `Lo hiciste en ${contador} ${
        contador == 1 ? "intento" : "intentos"
      } el numero es ${numeroSecreto}`
    );
    document.getElementById("valorUsuario").value = "";
    document.getElementById("intentar").setAttribute("disabled", "true");
    document.getElementById("reiniciar").removeAttribute("disabled");
    return;
  } else if (numeroDeUsuario > numeroSecreto) {
    asignarTextoElemento("p", "El número es menor");
  } else {
    asignarTextoElemento("p", "El número es mayor");
  }
  //#endregion

  //#region Se valida el numero de intentos
  if (contador >= 3) {
    asignarTextoElemento("h1", "Fallaste");
    asignarTextoElemento("p", "Inicia de nuevo");
    document.getElementById("valorUsuario").value = "";
    document.getElementById("intentar").setAttribute("disabled", "true");
    document.getElementById("reiniciar").removeAttribute("disabled");
    return;
  }
  //#endregion

  setTimeout(() => {
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  }, 1500);
  document.getElementById("valorUsuario").value = "";
  document.getElementById("valorUsuario").focus();
  return;
}
```

---

## 📁 Estructura del proyecto

```
Adivinar-Numero/
│
├── index.html         # Estructura principal del juego
├── style.css          # Estilos personalizados y fondo con gradiente
├── app.js             # Lógica del juego y validaciones
└── img/
    ├── ia.png         # Imagen decorativa
    ├── code.png       # Imagen de fondo
    └── Ruido.png      # Textura de fondo
```

---

## 🔧 Instalación local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/LenerCodeLab/Adivinar-Numero.git
   ```
2. Abre el archivo `index.html` en tu navegador.

---

## 🧠 Implemented Algorithms

- **Random number generation**: Se usa Math.random() para generar un número secreto entre 1 y 10.
- **Duplicate control**: Se usa un array auxiliar (listaNumeroSecreto) para evitar repetir números ya sorteados.
- **User input validation**: Se valida que el número ingresado no esté vacío, que no sea 0 y que sea un número válido.
- **Attempt limitation**: El juego se limita a 3 intentos por número, forzando una lógica de control de flujo.

## 🎯 Project Challenges

Este proyecto me permitió practicar y fortalecer habilidades clave en programación con JavaScript:

- ✅ Manipulación de arrays para controlar sorteos sin repeticiones
- ✅ Generación de números aleatorios y validación contra duplicados
- ✅ Manipulación del DOM para mostrar mensajes dinámicos al usuario
- ✅ Validación de entradas de formulario (input)
- ✅ Control de eventos (onclick) y enfoque del input
- ✅ Lógica condicional y estructuras de control de flujo (if, else, return)
- ✅ Uso de funciones reutilizables y organización del código con regiones

## 🧩 Posibles mejoras futuras

- [ ] Aumentar el rango del número secreto dinámicamente.
- [ ] Cambiar la cantidad de intentos según dificultad.
- [ ] Guardar puntajes o partidas en `localStorage`.
- [ ] Añadir efectos de sonido o animaciones.
- [ ] Crear modo oscuro.

---

## 👨‍💻 Autor

**LenerCodeLab**

- 🔗 GitHub: [@LenerCodeLab](https://github.com/LenerCodeLab)
- 🔗 LinkedIn: [@lenerhuamanperales](https://www.linkedin.com/in/lenerhuamanperales)

---

⭐ Si te gustó el proyecto, dale una estrella en GitHub.  
📢 ¡Comparte y sigue aprendiendo con desafíos como este!
