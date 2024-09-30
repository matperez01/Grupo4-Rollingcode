//? 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
// Dificultad:  🟢
//! solucion----------------------------------
// alert("Precaucíon!!!");

//? 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
// Dificultad:  🟢
// document.write("Hello World");

//? 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
// Dificultad:  🟢
// document.write(3 + 5);

//? 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// Ejemplo:

// input: Coder
// Output: Hola Coder

// Dificultad:  🟢

//? 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
// Dificultad:  🟢

//? Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo:

// input: 15 , 3
// Output: El 15 es el número más grande

// Dificultad:  🟢

// let numero1 = prompt("Escriba un numero del 1 al 10:");
// let numero2 = prompt("Escriba otro numero del 1 al 10:");
// if (numero1 > numero2) {
//   document.write(`El mayor de estos dos numeros es: ${numero1}`);
// } else {
//   document.write(`El mayor de estos dos numeros es: ${numero2}`);
// }

//? 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo:

// input: 15 , 3, 9
// Output: El 15 es el número más grande

// Dificultad:  🟢

// let number1 = prompt("Escribe un numero del 1 al 10:");
// let number2 = prompt("Escribe otro numero del 1 al 10:");
// let number3 = prompt("Escribe uno mas:");
// if (number1 > number2 && number1 > number3) {
//   document.write(`El mayor de estos numeros es: ${number1}`);
// } else if (number2 > number3) {
//   document.write(`El mayor de estos numeros es: ${number2}`);
// } else {
//   document.write(`El mayor de estos numeros es: ${number3}`);
// }

//? 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo:

// input: 10
// input: 15
// Output: El 10 es divisible por 2.
// Output: El 15 no es divisible por 2.

// Dificultad:  🟢🟡

// let numeroDivisible = prompt("Ingrese un numero");

// if (isNaN(numeroDivisible)) {
//   console.warn("El valor ingresado NO es un numero");
// } else {
//   if (numeroDivisible % 2 === 0) {
//     console.log(`el numero ${numeroDivisible} es divisible por 2`);
//   } else {
//     console.log(`el numero ${numeroDivisible} no es divisible por 2`);
//   }
// }

//? 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:

// input: Hola mundo
// Output: oauo

// Dificultad:  🟢🟡

//? 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// Ejemplo:

// input: 20
// Output: El 20 es divisible por 2.

// Dificultad:  🟢🟡

// let number = prompt("Ingrese un numero");

// if (isNaN(number)) {
//   console.warn("El valor ingresado NO es un numero");
// } else {
//   if (
//     number % 2 === 0 ||
//     number % 3 === 0 ||
//     number % 5 === 0 ||
//     number % 7 === 0
//   ) {
//     console.log(`El numero ${number} es divisible por 2, 3, 5 o 7.`);
//   } else {
//     console.log(`El numero ${number} NO es divisible por 2, 3, 5 o 7.`);
//   }
// }

//? 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo:

// input: 20
// input: 210
// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.

// let divisibleNumero = prompt("Ingrese un numero");

// if (isNaN(divisibleNumero)) {
//   console.warn("El valor ingresado NO es un numero");
// } else {
//   if (
//     divisibleNumero % 2 === 0 ||
//     divisibleNumero % 3 === 0 ||
//     divisibleNumero % 5 === 0 ||
//     divisibleNumero % 7 === 0
//   ) {
//     if (divisibleNumero % 2 === 0) {
//       console.log(`El numero ${divisibleNumero} es divisible por 2`);
//     }
//     if (divisibleNumero % 3 === 0) {
//       console.log(`El numero ${divisibleNumero} es divisible por 3`);
//     }
//     if (divisibleNumero % 5 === 0) {
//       console.log(`El numero ${divisibleNumero} es divisible por 5`);
//     }
//     if (divisibleNumero % 7 === 0) {
//       console.log(`El numero ${divisibleNumero} es divisible por 7`);
//     }
//   } else {
//     console.log(
//       `El numero ${divisibleNumero} NO es divisible por 2, 3, 5 o 7.`
//     );
//   }
// }
