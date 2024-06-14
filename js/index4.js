// para insertar al final del array un elemento 
// push -> nombreArray.push(elementoNuevo)
// let equipos = ["Real Madrid", "Barcelona", "Atletico de Madrid", "Sevilla", 
//     "Betis", "Valencia", "Villareal", "Getafe", "Las Palmas", "Atlethic Club"];
// equipos.unshift("Cinco Casas");
// // insertar al principio
// equipos.push("Alcazar de San Juan");
// console.log(equipos);
// Una aplicacion de análisis de datos en la que estás trabajando necesita crear una esctructura que almacene
// 10 múltiplos de 5 aleatorios de 0 a 100. Ademas, ni el primer elemento puede ser menor de 50, ni el último 
// mayor de 50.

let arrayMulti = new Array(10);

for (let i = 0; i < arrayMulti.length; i++) {
    let multiplo = parseInt(Math.random() * 21) * 5;
    arrayMulti[i] = multiplo;
}
console.log(arrayMulti);

while (arrayMulti[0] < 50) {
    let nuevoMulti = parseInt(Math.random() * 21) * 5;
    arrayMulti.shift();
    arrayMulti.unshift(nuevoMulti); 
    // arrayMulti[0] = nuevoMulti;
}
console.log(arrayMulti);

while (arrayMulti[9] > 50) {
    let nuevoMulti = parseInt(Math.random() * 21) * 5;
    arrayMulti.pop();
    arrayMulti.push(nuevoMulti); 
    // arrayMulti[0] = nuevoMulti;v
}
console.log(arrayMulti);
