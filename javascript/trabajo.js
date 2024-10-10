// Ejercicio 1: Crear una función con un callback personalizado
// Deben crear una función llamada procesarDatos que reciba un array y un callback. El callback determinará cómo procesar los datos del array. Puede ser una suma, resta, multiplicacion o division como el ejemplo de clases, pero usando map o foreach


// Ejercicio 2: Filtrar y encontrar nombres con callbacks
// Deben filtrar un array de nombres para encontrar aquellos que comiencen con una letra específica. Luego, deben encontrar el primero que cumpla esa condición.

const numeros = [55, 48, 6];
function mutiplicar(numero) {
    return numero * 2
}
function procesarDatos(numeros, mutiplicar){
   const resultado = numeros.map((numero)=>{
    return mutiplicar(numero)
   })
   return resultado
}
console.log(procesarDatos(numeros , mutiplicar));
 


// let nombres =["pa", "ae", "li", "zo"]

// function nombre1 (nombres){
//  let nombre2 = nombres.filter((nombre) =>{
//     return nombre.startsWith("z")
//  })
//  return nombre2
// }

// console.log(nombre1(nombres, nombre2));
