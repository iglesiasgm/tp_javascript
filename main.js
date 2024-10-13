
//EJERCICIO 2 PRACTICO JAVASCRIPT

let a = 2;
let b = 3;
let suma = a+b;
console.log("La suma de a y b es igual a: ",suma);

//EJERCICIO 3 PRACTICO JAVASCRIPT
let nombre = prompt("¿Cuál es tu nombre?");
console.log("Hola, ", nombre+"!");

//EJERCICIO 4 PRACTICO JAVASCRIPT
let c = 9

if (a>b && a>c){
  console.log("El mayor de los tres numero es: ", a);
} else if(b>a && b>c){
  console.log("El mayor de los tres numero es: ", b);
} else(c>a && c>b);{ 
  console.log("El mayor de los tres numero es: ", c);
};

//EJERCICIO 5 PRACTICO JAVASCRIPT
let numeroIngresado = prompt("Ingresa un número");

if(numeroIngresado%2 === 0){
  console.log("El número que ingresaste, ", numeroIngresado," definitivamente es par");
} else {
  console.log("El número que ingresaste, ", numeroIngresado," definitivamente es impar");
}

//EJERCICIO 6 PRACTICO JAVASCRIPT

let contador = 10;

while (contador >= 0) {
  console.log(contador);
  contador--;
}


//EJERCICIO 7 PRACTICO JAVASCRIPT

let numero100;

do {
  numero100 = prompt("Ingresa un número mayor a 100:");
  numero100 = Number(numero100);
} while (numero100 <= 100 || isNaN(numero100));

console.log("Has ingresado un numero mayor que 100: ", numero100);


//EJERCICIO 8 PRACTICO JAVASCRIPT

let numParImpar = prompt("Ingresa un número para analizar si es par");
function esPar (numParImpar) {
 let e;
  if(numParImpar % 2 === 0){
    e == true;
    console.log("El número", numParImpar, " es par: true");
  } else {
    console.log("El número", numParImpar, " es par: false");
  }
}
esPar(numParImpar);

//EJERCICIO 9 PRACTICO JAVASCRIPT

let grados=30.0;
function convertirCelsiusAFahrenheit(grados){
  let gradosF = grados * 1.8 + 32;
  console.log(grados,"°C son equivalentes a ", gradosF,"°F"); 
}

convertirCelsiusAFahrenheit(grados);

//EJERCICIO 10 PRACTICO JAVASCRIPT


let persona = {
  nombre: "Gabriel",
  edad: 20,
  ciudad: "Mendoza",
  
  cambiarCiudad: function(nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  }
};

console.log("Propiedades iniciales:", persona);

persona.cambiarCiudad("Córdoba");

console.log("Propiedades actualizadas:", persona);

//EJERCICIO 11 PRACTICO JAVASCRIPT

let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 1605,
  
  esAntiguo: function() {
    const añoActual = new Date().getFullYear();
    const diferenciaAños = añoActual - this.año;

    if (diferenciaAños > 10) {
      console.log(`El libro "${this.titulo}" es antiguo (más de 10 años).`);
    } else {
      console.log(`El libro "${this.titulo}" es reciente (menos de 10 años).`);
    }
  }
};

libro.esAntiguo();

//EJERCICIO 12 PRACTICO JAVASCRIPT

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosMultiplicados = [];

for (let i = 0; i < numeros.length; i++) {
  numerosMultiplicados.push(numeros[i] * 2);
}

console.log("Array original:", numeros);
console.log("Array multiplicado por 2:", numerosMultiplicados);

//EJERCICIO 13 PRACTICO JAVASCRIPT

let pares = [];

for (let i = 1; pares.length < 10; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}

console.log("Primeros 10 números pares:", pares);

//EJERCICIO 14 PRACTICO JAVASCRIPT

document.getElementById("cambiarColor").addEventListener("click", function() {
  
  let parrafos = document.querySelectorAll(".textos");
  
  parrafos.forEach(function(parrafo) {
    parrafo.style.color = "blue";
  });
});

//EJERCICIO 15 PRACTICO JAVASCRIPT

function mostrarAlerta() {
  let textoIngresado = document.getElementById("textoInput").value;
  alert("Has ingresado: " + textoIngresado);
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("alertButton").addEventListener("click", mostrarAlerta);
});

//EJERCICIO 16 PRACTICO JAVASCRIPT

const lista = document.querySelectorAll("#miLista li");

    lista.forEach(function(item) {
      item.addEventListener("click", function() {
        console.log("Has hecho clic en: " + item.textContent);
      });
    });

//EJERCICIO 17 PRACTICO JAVASCRIPT

    const input = document.getElementById("miInput");
    const deshabilitarBtn = document.getElementById("deshabilitarBtn");
    const habilitarBtn = document.getElementById("habilitarBtn");

    deshabilitarBtn.addEventListener("click", function() {
      input.disabled = true;
    });

    habilitarBtn.addEventListener("click", function() {
      input.disabled = false;
    });

//EJERCICIO 18 PRACTICO JAVASCRIPT

const formulario = document.getElementById("miFormulario");
const emailInput = document.getElementById("emailInput");
const correoGuardadoDiv = document.getElementById("correoGuardado");
const eliminarBtn = document.getElementById("eliminarBtn");

// Cargar el correo desde localStorage al cargar la página
window.onload = function() {
    const correoGuardado = localStorage.getItem("correo");
    if (correoGuardado) {
        mostrarCorreo(correoGuardado);
    }
};

// Función para mostrar el correo en el DOM
function mostrarCorreo(correo) {
    correoGuardadoDiv.textContent = `Correo guardado: ${correo}`;
    //eliminarBtn.style.display = "block"; // Mostrar el botón de eliminar
}

// Manejar el envío del formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const correo = emailInput.value.trim(); // Obtener el valor y quitar espacios
    localStorage.setItem("correo", correo); // Guardar el correo en localStorage
    mostrarCorreo(correo); // Mostrar el correo en el DOM

    emailInput.value = ""; // Limpiar el campo de entrada
});

// Manejar la eliminación del correo
eliminarBtn.addEventListener("click", function() {
    localStorage.removeItem("correo"); // Eliminar el correo de localStorage
    correoGuardadoDiv.textContent = ""; // Limpiar el DOM
    eliminarBtn.style.display = "none"; // Ocultar el botón de eliminar
});