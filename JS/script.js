// MAP: ejecuta una función por cada item y genera un nuevo array. 

let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(numero => {
    return numero*3;
})

console.log(resultado)      // [ 3, 6, 9, 12, 15 ]


// FILTER: Muestra todas las coincidencias en un conjunto de datos según condición: 

let nombres = ["Alan", "Juan", "Gonzalo", "Héctor", "Román", "Francisco", "Pedro", "Nicolás", "Santiago"]

let mayores6letras = nombres.filter(nombre => nombre.length > 6); // [ 'Gonzalo', 'Francisco', 'Nicolás', 'Santiago' ]

console.log(mayores6letras);

// FINDE: Muestra la primera coincidencia según condición (es sólo un resultado, el primero, y no genera array sino solo el valor)

console.log(nombres.find(nombre => nombre.length > 6));     // Gonzalo 

let enviado = document.getElementById(msg-btn)


// ---------------------- FUNCIONES ------------------------

function msgEnviado () {
    alert("Mensaje enviado. ¡Gracias por contactarnos!");
}