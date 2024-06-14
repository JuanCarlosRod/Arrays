let imagenes = document.querySelectorAll(".imagenes");

imagenes.forEach(imagen => {
    let originalAncho = imagen.clientWidth;
    let originalAlto = imagen.clientHeight;

    imagen.addEventListener("mouseover", function(){
        imagen.style.width = (originalAncho * 1.1) + "px";
        imagen.style.height = (originalAlto * 1.1) + "px";
    });

    imagen.addEventListener("mouseout", function(){
        imagen.style.width = originalAncho + "px";
        imagen.style.height = originalAlto + "px";
    });
});


// crear elementos en un select
// let select = document.querySelector("#losCoches");
// for (let i = 0; i < arrayCoches.length; i++) {
//     let option = document.createElement("option");
//     option.textContent = arrayCoches[i];
//     option.setAttribute("id", arrayCoches[i]);
//     select.appendChild(option);
// }
// select.addEventListener("change", function() {
//     console.log(select.value);
// })

// crear una coleccion
// let coleccion1 = new Set[1,2,3,4,5,1];

// console.log(coleccion1);


// Mapa de clave-valor
let mapa1 = new Map([[1, "Irina"],[2, "Manuel"]]);
console.log(mapa1);

for(let [indice,valor] of mapa1) {
    console.log(`El indice es ${indice} y el nombre es ${valor}`);
}


mapa1.delete(1);


