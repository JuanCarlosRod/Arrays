// // Variables -> Nombre, utiliza un espacio de memoria para guardar un valor
// let alumno1 = "Juan Perez";
// let alumno2 = "Marina Torres";
// // .... para estructuras de datos -> se guardan en memoria como las variables
// // se utilizan ARRAYS 

// // declaracion de un Array
// let alumnos = ["Juan Rodriguez", "Marina Torres", "Dani Lopez", "Tania Pinero", ,"Sergui Castro"];
// alumnos[5] = "Arantxa González"

// console.log(alumnos[3]);
// console.log(alumnos);

// let profesores = new Array(); //Declaro la estructura de un Array sin valores
// // reemplazar un valor en una posicion especifica, con invocarlo se puede cambiar

// alumnos[5] = "Arantxa González García";
// console.log(alumnos);


// // ACTIVIDAD 3.1
// // Crear un array con 6 localidades y mostrar solo las posiciones impares

// let localidades = ["Alcázar de San Juan", "Argamasilla de Alba", "Mota del Cuervo", "Cinco Casas", "Quintanar de la Orden", "Tomelloso"];

// for(i = 0; i<localidades.length; i++){//para conocer la longitud de un array -> Array.length
//     if(i % 2 != 0){ //si el resto del i divido entre 2 es distinto de 0 entra
//         console.log(localidades[i]);
//     }
// }

// // RECORRER TODO EL ARRAY LOCALIDADES


// console.log("Array Entero:");
// for(i = 0; i< localidades.length; i++){
//     console.log(`Localidad ${i+1} -> ${localidades[i]}`);
// }


// // Crear un Array Bidimensional ...valores random del 1 al 10
// // Crear 5 filas y 4 columnas
// let arrayFC = new Array(5); el (5) //indica la longitud del array que estamos definiendo

// for (let index = 0; index < 5; index++) {//recorremos las filas
//     arrayFC[index] = new Array(4); //en este punto se crean las columnas a la fila i

//     for (let y = 0; y < arrayFC[i].length; y++) { //se recorren las columnas por esa fila
//         let num = parseInt(Math.random() * 10 + 1); //creamos un valor aleatorio
//         arrayFC[index][y] = num; //se le inserta en las posiciones [index, y]
//     }
// }

// console.log(arrayFC);

// crea un cuadro y un desplegable indicando los colores, y segun selecciones... va al array con el 
// indice y cambia de color

let coloresRGB = ["#f39c12", "#C0F312", "#12F3E5", "#F312AF", "#F31212"];
let nombreRGB = ["Naranja", "Lima", "Turquesa", "Rosa", "Rojo"];

let colores = document.querySelector("#colores");

for (let i = 0; i < nombreRGB.length; i++) {
    let opcion = document.createElement("option");
    // le indico con textContent que muestra en el select por cada opcion
    opcion.textContent = nombreRGB[i];
    opcion.setAttribute("value", i); //Se le agregan atributos (id)
    colores.appendChild(opcion); //Se le crean los hijos y a cada uno se le agrega una opcion (Naran, Turq ...)
}

let contenedor = document.querySelector(".container");
// escuchamos el evento de cambio dentro del select para que cambie el color del fondo

colores.addEventListener("change", function () {
    contenedor.style.backgroundColor = "";
    contenedor.style.borderRadius = "";
    contenedor.style.border = "";

    // si seleccionas el option de value = "" -> le damos color y forma
    if (colores.value == "") {
        contenedor.style.backgroundColor = "balck";
        contenedor.style.borderRadius = "50px";
        contenedor.style.border = "2px solid red";
    } else {
        contenedor.style.backgroundColor = coloresRGB[colores.value];
        contenedor.style.border = "2px solid black";
        contenedor.style.borderRadius = "35px";
    }
    
});
