let deeapool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function () {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder} `
    }
}


console.log(deeapool.getNombre());

let {nombre: primerNombre, apellido, poder} = deeapool;

console.log(primerNombre, apellido, poder);