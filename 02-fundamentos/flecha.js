/*
function sumar(a, b) {

    return a + b;
}
*/

//let sumar = (a, b) => a + b;


/*
function saludar() {
    return 'Hola mundo';
}
*/

/*
let saludar = () => 'Hola mundo';
*/
/*

function saludar(nombre) {
    return `Hola ${nombre}`;
}
*/

//console.log(sumar(10, 20));

let saludar = nombre => `Hola ${nombre}`;




//console.log(saludar('fernando'));

let deeapool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {return `${this.nombre} ${this.apellido} - poder: ${this.poder} `}

}

console.log(deeapool.getNombre());