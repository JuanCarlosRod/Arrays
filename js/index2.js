// Actividad Propuesta 3.3

// Crear un array con 100 valores aleatorios y mostrar solo los pares
// Utilizar el recorrido con for-in

// let array = new Array(100);

// // para crear el array utilizamos el for-in
// for (let index = 0; index < array.length; index++) {
//     array[index] = parseInt(Math.random()*1000+1);
// }

// // para mostrar el array y valorar si es par, utilizamos el for-in
// for (let indice in array) { //recorre el array con otro el bucle for tomando en cuenta el indice
//     if(array[indice]%2 == 0){
//         console.log(`Número par en el indice ${indice} con valor ${array[indice]}`);
//     }
// }

// let arrayMascotas = ["Perro", "Gato", "Tortuga"];
// // recorrer el array mascotas con el for of
// for(let mascota of arrayMascotas){ //Java -> for(String mascota: arrayMascotas)
//     console.log(mascota);
// }

// let matriz = [[5,1,2],[7,8,2],[4,2,6],[7,8,1]];
// console.log(matriz.length);//nos da las filas


// console.log(matriz);
// // recorrer ek array bidimensional de otra forma
// for (let f = 0; f < matriz.length; f++) { //lo va a recorrer 4 veces (filas)
//     for (let c = 0; c < matriz[f].length; c++) {
//         console.log(`Fila: ${f} Columna: ${c} -> ${matriz[f][c]}`);
//     }
// }

// Actividad 3.2
// Crea una matriz 3x3, rellenala con numeros enteros y muestra en pantalla aquellos numeros que forman parte de la 
// diagonal principal
// let arrayD = new Array(3);

// for (let f = 0; f < arrayD.length; f++) {
//     arrayD[f] = new Array(3);

//     for (let c = 0; c < arrayD[f].length; c++) {
//         arrayD[f][c] = Math.floor(Math.random()*100+1);
//         document.getElementById("d"+f+c).innerHTML = arrayD[f][c];

//         if(f == c) {
//             document.getElementById("d"+f+c).style.color = "red";
//         }
//     }    
// }

// console.log(arrayD);




