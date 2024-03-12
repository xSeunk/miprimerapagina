//alert("Hola este es mi Javascript");
//let nombre = "Carlos";
//nombre="Jesús";

//var nombre1='Carlos';

//const nombre2='Carlos';

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//SELECCIONAR ELEMENTOS
let contenidoTitulo= 'Carlos';

let titulo = document.querySelector(".logo .fuente-acento");
titulo.innerHTML=contenidoTitulo;

//condicionales
let textotitulo = titulo.innerText;
console.log(textotitulo);

if(textotitulo == "Nombre"){
    titulo.innerHTML = "Otro";
}else{
    console.log("No se cumple");
}

let nombre="Ani";
let ciudad="Bs As";
let gusto="Chocolate";

let parrafo= document.querySelector(".parrafo2");

function cambiarTexto(nombre,ciudad, gusto){
    let contenido = `Me llamo ${nombre}, naci en ${ciudad} y vivo en caballito. Me encantaria aprender a programar`;   
     return contenido;
}

parrafo.innerText = cambiarTexto(nombre,ciudad,gusto);