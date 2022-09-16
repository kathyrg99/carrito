//callback

/* function cuadradoCallback( valor, callback){
    setTimeout(() => {
        callback(valor , valor * valor)
    }, 3000)
}

cuadradoCallback(2, (valor, resultado)=> {
    console.log(valor, resultado);
    cuadradoCallback(resultado, (valor, resultado) => {
    console.log(valor, resultado)
    })
})

console.log("ultimo en salir por consola"); */

//esto es viejo y engorroso 

//colocando async adelante de la función lo convierte en una funcion asincrónica
/* async function cuadradoAsync(){
    return valor * valor
}

console.log(cuadradoAsync(2)); */

//promesa
/* function cuadradoPromise(valor){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(valor * valor)
            reject("error")
        }, 3000)
    })
}

cuadradoPromise(2)
    //then: cuando se cumpla vamos a recibir respuesta 
    //then es un metodo de las promesas
    .then(respuesta => {console.log(respuesta)
    return cuadradoPromise(respuesta)
}) 
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error)) 
     */

    //async y await trabajan juntos 
async function cuadradoAsync(valor){
    return valor * valor
}    

async function obtenerResultado(){
    let resultado = await cuadradoAsync(4)
    console.log(resultado)

    resultado = await cuadradoAsync(resultado)
    console.log(resultado) 

    resultado = await cuadradoAsync(resultado)
    console.log(resultado)

}
obtenerResultado()


