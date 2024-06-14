// ACTIVIDAD PROPUESTA 3.4

// Quieres crear una estructura de datos que almacene la tabla de clasificacion de una liga 
// local de futbol con estos datos:

// La liga la disputan 10 equipos
// Para cada equipo necesitas:
//     - Nombre
//     - Puntos 
//     - Partidos jugados, ganados, empatados y perdidos
//     - Goles a favor y goles en contra

// Crea la estructura de datos que consideres mas útil, rellénala con datos coherentes y muestra en pantalla 
// toda la informacion de la clasificacion del equipo ganador


// Array de Nombres
let equipos = ["Real Madrid", "Barcelona", "Atletico de Madrid", "Sevilla", "Betis", "Valencia", "Villareal", "Getafe", "Las Palmas", "Atlethic Club"];


let datosEquipo = [[38, 29, 8, 1, 87, 26, 61, 95],
[38, 26, 7, 5, 79, 44, 35, 85],
[38, 25, 6, 7, 85, 46, 39, 81],
[38, 24, 4, 10, 70, 43, 27, 76],
[38, 19, 11, 8, 61, 37, 24, 68],
[38, 16, 12, 10, 51, 39, 12, 60],
[38, 14, 15, 9, 48, 45, 3, 57],
[38, 14, 11, 13, 65, 65, 0, 53],
[38, 13, 10, 15, 40, 45, -5, 49],
[38, 12, 10, 16, 36, 46, -10, 46]];
// Encontrar el equipo ganador (el que tiene más puntos)
let equipoGanador = 0;

for (let i = 1; i < datosEqcuipo.length; i++) {
    if (datosEquipo[i][7] > datosEquipo[equipoGanador][7]) { 
        equipoGanador = i;
    }
}

// Mostrar todos los equipos y sus datos en una tabla en el front
let tabla = document.querySelector("table");

// Crear filas para cada equipo
for (let index = 0; index < equipos.length; index++) {
    let fila = document.createElement("tr");
    
    if (index === equipoGanador) {
        fila.style.fontWeight = "bold"; // Resaltar el equipo ganador
        fila.style.backgroundColor = "green";
    }
    tabla.appendChild(fila);

    // Agregar nombre del equipo
    let columnaNombre = document.createElement("td");
    columnaNombre.textContent = equipos[index];
    fila.appendChild(columnaNombre);

    // Agregar estadísticas del equipo
    for (let c = 0; c < datosEquipo[index].length; c++) {
        let columna = document.createElement("td");
        columna.textContent = datosEquipo[index][c];
        fila.appendChild(columna);
    }
}

// Mostrar la información del equipo ganador en el elemento con id "equipoGanador"
let equipoGanadorElemento = document.getElementById("equipoGanador");
equipoGanadorElemento.textContent = equipos[equipoGanador];




// // Datos de los equipos y sus estadísticas
// let equipos = ["R. Madrid", "Girona", "Barcelona", "Atlético", "Villarreal", "Athletic", "Real Sociedad", "Betis", "Sevilla", "Celta"];
// let datosEquipo = [
//     [87, 598, 368, 67, 4, 0],
//     [85, 484, 406, 75, 1, 0],
//     [79, 595, 412, 85, 2, 0],
//     [70, 481, 438, 82, 5, 0],
//     [65, 469, 488, 102, 8, 1],
//     [61, 463, 511, 75, 5, 0],
//     [51, 461, 604, 98, 2, 0],
//     [48, 492, 429, 85, 3, 0],
//     [48, 490, 477, 108, 4, 0],
//     [46, 472, 462, 62, 5, 0]
// ];

// // Encontrar el equipo ganador (el que tiene más puntos)
// let equipoGanador = 0;

// for (let i = 1; i < datosEquipo.length; i++) {
//     if (datosEquipo[i][0] > datosEquipo[equipoGanador][0]) { // Comparar los puntos de cada equipo
//         equipoGanador = i;
//     }
// }

// // Mostrar todos los equipos y sus datos en una tabla en el front
// let tabla = document.querySelector("table");

// // Crear filas para cada equipo
// for (let index = 0; index < equipos.length; index++) {
//     let fila = document.createElement("tr");
    
//     if (index === equipoGanador) {
//         fila.style.fontWeight = "bold"; // Resaltar el equipo ganador
//     }
//     tabla.appendChild(fila);

//     // Agregar nombre del equipo
//     let columnaNombre = document.createElement("td");
//     columnaNombre.textContent = equipos[index];
//     fila.appendChild(columnaNombre);

//     // Agregar estadísticas del equipo
//     for (let c = 0; c < datosEquipo[index].length; c++) {
//         let columna = document.createElement("td");
//         columna.textContent = datosEquipo[index][c];
//         fila.appendChild(columna);
//     }
// }

// // Mostrar la información del equipo ganador en el elemento con id "equipoGanador"
// let equipoGanadorElemento = document.getElementById("equipoGanador");
// equipoGanadorElemento.textContent = equipos[equipoGaador];