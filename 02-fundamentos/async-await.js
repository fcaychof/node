/*
*Async Await
*
*/

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fernando');
        }, 3000);
    });
};

//console.log(getNombre());


/*
getNombre().then(nombre => {
    console.log(nombre);
}).catch(e => {
    console.log(`Error de ASYNC`, e);
})*/


let saludo = async () => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => console.log(mensaje)).catch(e => console.log(`Error de ASYNC`, e));