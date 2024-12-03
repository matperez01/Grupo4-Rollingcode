//! 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

//? Output (assets output):

// Dificultad:  🟢🟡
//! 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// Ejemplo:
// Input:
// [‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
//? Output (assets output2):


// Dificultad:  🟢🟡🔴
//! 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
//? Ejemplo de salida (En assets esta el ejemplo)


 let suma = [];


 for (let i = 1; i < 50; i++) {
   
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    let resultado = dado1 + dado2;
    suma.push(resultado);
 }

let sinDuplicados = suma.filter ((item, index) => suma.indexOf (item) === index );
console.log(sinDuplicados);

let resultado = [];

for (let i=0; i< sinDuplicados.length; i++)
{
    let repeticiones = 0;

    for (let j=0; j< suma.length; j++)
    {
        if(sinDuplicados [i] === suma [j] )repeticiones++;
        
        resultado [i] = repeticiones;   
    }
}

console.log(resultado);

document.write (`<table>
    <thead>
         <tr>
            <th>suma🎲🎲</th>
            <th>apariciones</th>
         </tr>
    </thead>
         <tbody>`);
        for (let i=0; i< sinDuplicados.length; i++)
        {
            document.write(`
                 <tr>
                    <td>${sinDuplicados [i]}</td>
                    <td>${resultado [i]}</td>
                </tr> `);
        }
        document.write(` 
            </tbody>
    
        </table>`);
        




//? Funciones

// Dificultad:  🟢
//! 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

// function cadenaTexto (num1){

//     let par = num1/2;
//     if (par === 0 )
//     {
//         console.write("es un numero par")
//     }
//     else {
//         console.write("es impar")
//     }
//     return cadenaTexto;
// }
//  cadenaTexto(4);

// Dificultad:  🟢🟡
//! 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// const cadena = (texto) =>
// {
//     let mayus= texto.toUpperCase()
//     let minus = texto.toLowerCase()

  
//     switch (texto){
//         case mayus:
//             console.log("es todo mayuscula");
//         break;

//         case minus:
//             console.log("es minuscula");
//             break

//         default:
//             console.log("tiene ambas")
//             break;

//     }
   
// }

// console.log(cadena("TEXTO"))

// Dificultad:  🟢🟡
//! 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
//? La fórmula del perímetro  es p = 2*(a +b)
//? Ejemplo:
//? Input:
//? lado A = 24
//? lado B = 5
//? Output: 58

const rectangulo = () => {
     
        let lado_a = parseFloat(parseInt(prompt("ingrese el lado A")))
         let lado_b= parseFloat(parseInt(prompt("ingrese el lado B")));
    
        let formula = 2*(lado_a + lado_b);
    
         console.log(`el perimetro es de ${formula}`);
    
     }
     rectangulo()

// Dificultad:  🟢🟡
//! 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los repeticiones del 1 al 10 del número elegido por el usuario

const tabla= ()=> {
    let dato = parseInt(document.getElementById("info").value);
    console.log(dato);

    for (let i = 1; i<= 10; i++){
       let num = dato * i;

       document.write(num);
    }
}
tabla();
