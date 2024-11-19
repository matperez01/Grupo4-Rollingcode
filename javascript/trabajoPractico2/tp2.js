// Ejercicios javascript - Bucles
// Dificultad:  🟢

// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.



// Dificultad:  🟢🟡
// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// Ejemplo:
// Input: 5
// Input: 50
// Input: hola10
// Output: Suficiente
// Output: Número erróneo
// Output: Introduce un número válido



// do{
// let nota = parseInt(prompt("ingrese un numero entre 0 y 10"));

//     if (!isNaN(nota)){

//         switch (nota) {
//             case 0:
//                 case 1:
//                 case 2:
//                     alert("Muy deficiente");
//                     break;
//             case 3:
//                 case 4:
//                     alert("Insuficiente");
//                     break;
//             case 5:
//                 case 6:
//                     alert("Suficiente");
//                     break;
//             case 7:
//                 case 8:
//                     alert("Bien");
//                     break;
//             case 9:
//                 alert("Notable");
//                 break;
//             case 10:
//                 alert("Sobresaliente");
//                 break;
//             default:
//                 alert("Número erróneo");                                               
//         }
//         } else {
//             alert("Introduce un número válido");

//         } 
// } while (confirm("¿Desea continuar?"));
//!---------------------------------------------------------------------------------------------------------------------------------------------
// Dificultad:  🟢🟡

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
//  let respuesta = "";

// do {
//     let cadena = prompt("ingrese una cadenas de texto").toLocaleUpperCase();
// console.log(cadena);
//   if (cadena == "") { 
//     respuesta = cadena ;
//     } else {
//         respuesta += "-." + cadena
//     }
// } while (confirm('continuar?'));

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp}


// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


// Dificultad:  🟢🟡🔴
// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// Ejemplo: 
// Input:  40773821 
// Output: ‘L’

// do {
//     let dni = parseInt(prompt(`ingrese un dni: `));
//     if (!isNaN(dni)) {
//        if (dni >= 0 && dni < 99999999) 
//            {
//            let valordiv = dni % 23
//            switch (valordiv) {
//                case 0:
//                   alert("la letra asignadada es: T");
//                     break;

//                 case 1:
//                     alert("la letra asignadada es: R");
//                     break;

//                 case 2:
//                     alert("la letra asignadada es: W");
//                     break;

//                 case 3:
//                     alert("la letra asignadada es: A");
//                     break;

//                 case 4:
//                     alert("la letra asignadada es: G");
//                     break;

//                 case 5:
//                     alert("la letra asignadada es: M");
//                     break;

//                 case 6:
//                     alert("la letra asignadada es: Y");
//                     break;

//                 case 7:
//                     alert("la letra asignadada es: F");
//                     break;

//                 case 8:
//                     alert("la letra asignadada es: P");
//                     break;

//                 case 9:
//                     alert("la letra asignadada es: D");
//                     break;

//                 case 10:
//                     alert("la letra asignadada es: X");
//                     break;

//                 case 11:
//                     alert("la letra asignadada es: B");
//                     break;

//                 case 12:
//                     alert("la letra asignadada es: N");
//                     break;

//                 case 13:
//                     alert("la letra asignadada es: J");
//                     break;

//                 case 14:
//                     alert("la letra asignadada es: Z");
//                     break;

//                 case 15:
//                     alert("la letra asignadada es: S");
//                     break;

//                 case 16:
//                     alert("la letra asignadada es: Q");
//                     break;

//                 case 17:
//                     alert("la letra asignadada es: V");
//                     break;

//                 case 18:
//                     alert("la letra asignadada es: H");
//                     break;

//                 case 19:
//                     alert("la letra asignadada es: L");
//                     break;
//                 case 20:
//                     alert("la letra asignadada es: C");
//                     break;

//                 case 21:
//                     alert("la letra asignadada es: K");
//                     break;

//                 case 22:
//                     alert("la letra asignadada es: E");
//                     break;

//                 default:
//                  alert("Número erróneo"); 

//             }

//         }else{alert("ingrese cantidad de numeros validos ")} 
//     }
// } while (confirm ("¿Desea continuar?"));










// Dificultad:  🟢🟡
// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666

// for (let i=1; i <= 30; i++)
// {
//  for (let j=0 ; j < i ; j++)
//  {
//     document.write(i)
//     document.write("<br>")
//  }
           
// }
// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

// for (let i=30; i >= 1; i--)
//  {
//     for (let j=0 ; j < i ; j++)
//     {
//         document.write(i)
//         document.write("<br>")
//     }
            
// }


// Dificultad:  🟢🟡
// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

// let numero= parseInt(prompt("ingrese un numero: "))
//     if (!isNaN (numero) && numero < 50){
      
//         for (let i= 1; i <= numero; i++)
//             {
//                 for (let j=1 ; j < i ; j++)
//                     document.write(j)
//                     document.write("<br>")
//             }
//     }else{
//         alert("pone un numero menor a 50")
//     }
// Dificultad:  🟢🟡🔴
// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10
// let num = 500;

// for (let i = 1; i <= num.length; i++) {
//     if(i % 4 == 0){
//      document.write(`${i} es multiplo de 4`);
//      }
//     if (i% 9 == 0) {
//         document.write(`${i } es multiplo de 9`);
//     }
//     // document.write("<br>")
//     if(i % 5 == 0);{
//         document.write("<hr>");
//     }
// }
let nombre1 = prompt("ingresar nombre 1")
let nombre2 = prompt("ingresar nombre 2")
let nombre3 = prompt("ingresar nombre 3")

let edad1 = parseInt(prompt("ingresar edad 1"))
let edad2 = parseInt(prompt("ingresar edad 2"))
let edad3 = parseInt(prompt("ingresar edad 3"))

let mayor = console.log(Math.max(edad1, edad2, edad3))

if (edad1 == mayor)
{
    console.log(`${nombre1} es el mayor`)
}
else if(edad2 == mayor)
{
    console.log(`${nombre2} es el mayor`)
}

else if (edad3 == mayor){
    console.log(`${nombre3} es el mayor`)
}
else {
    console.log("los tres tiene la misma edad");
    
}
console.log( nombre1.toUpperCase);


// Dificultad:  🟢🟡🔴
// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
// let filas = prompt("ingrese cantidad de fila");

//let filas = parseInt(prompt('Ingrese un numero de filas'));
// let columnas = parseInt(prompt('Ingrese un numero de columnas'));

// let total = filas * columnas;

// document.write('<table border>');
// for(let indiceFila=0; indiceFila < filas; indiceFila++){

//     document.write('<tr>');

//     for(let indiceColumna=0; indiceColumna< columnas; indiceColumna++){
//         document.write('<td>'+total+'</td>');
//          total--; 
//     }
//     document.write('</tr>');
// }
// document.write('</table>');
    


   

// Ejercicios con Math


// Dificultad:  🟢🟡
// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

// Dificultad:  🟢🟡
// 12- Realiza un script que genere un número aleatorio entre 1 y 99


// Ejercicios con String


// Dificultad:  🟢🟡
// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.
// Dificultad:  🟢🟡
// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
// Dificultad:  🟢🟡
// 15- Realiza un script que cuente el número de vocales que tiene un texto.
// Dificultad:  🟢🟡
// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.


// Dificultad:  🟢
// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// Ejemplo:



// Input: Hola mundo

// Output: la vocal ‘o’ está en la posición 1
