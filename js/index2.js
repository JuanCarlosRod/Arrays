// Actividad Propuesta 3.3

// Crear un array con 100 valores aleatorios y mostrar solo los pares
// Utilizar el recorrido con for-in

let array = new Array(100);

// para crear el array utilizamos el for-in
for (let index = 0; index < array.length; index++) {
    array[index] = parseInt(Math.random()*1000+1);
}

// para mostrar el array y valorar si es par, utilizamos el for-in
for (let indice in array) { //recorre el array con otro el bucle for tomando en cuenta el indice
    if(array[indice]%2 == 0){
        console.log(`Número par en el indice ${indice} con valor ${array[indice]}`);
    }
}

let arrayMascotas = ["Perro", "Gato", "Tortuga"];
// recorrer el array mascotas con el for of
for(let mascota of arrayMascotas){ //Java -> for(String mascota: arrayMascotas)
    console.log(mascota);
}