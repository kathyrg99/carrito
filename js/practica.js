const db = [
    {
        nombre: "item1",
        id: 1,
        precio: 100
    },
    {
        nombre: "item2",
        id: 2,
        precio: 200
    },
    {
        nombre: "item3",
        id: 3,
        precio: 300,
    }
]

function request(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(db)
        }, 2000)

    })
}

async function obtenerDatos(){
    try{
        document.querySelector("#root").innerHTML = "<h1>Cargando productos</h1>"
        let data = await request()
        generarProductos(data)
        agregarEvento()
    } catch(error){

    }
}

obtenerDatos()

function generarProductos(arrayProductos){
//.map recorrer el array iterando x todo el elemento
    let divProductos = document.querySelector("#root")
    divProductos.innerHTML = ""

    arrayProductos.map(elemento => {
        
        divProductos.innerHTML += `
        <div>
            <h3>${elemento.nombre}</h3>
            <p>${elemento.precio}</p>
            <button class="btnAdd" id=${elemento.id}>Agregar</button>
        </div>
        `
    })
}

function agregarEvento(){
    let btns = document.querySelectorAll(".btnAdd");
    
    for (const btn of btns) {
        btn.addEventListener("click", (evento) =>{
            //console.log(evento.target.id);
            let idProducto = evento.target.id
            let producto = db.find(el => el.id === parseInt(idProducto) )
            //console.log(producto);
            carrito.push(producto)
            localStorage.setItem("carrito" , JSON.stringify(carrito))
            console.log(carrito);
            pintarCarrito()
        })
    }
    
}

function pintarCarrito(){
    let divCarrito = document.querySelector("#carrito");
    divCarrito.innerHTML = ""
    carrito.map( el => {
        divCarrito.innerHTML += `
        <div>
        <h3>${el.nombre}</h3>
        <h4>${el.precio}</h4>
        </div>
        `

    })

}

const carrito = [];


// esto no anda y no entiendo por qué 

  /*       divProductos.innerHtml += `
        <div>
            <h3>${elemento.nombre}</h3>
            <p>${elemento.precio}</p>
            <button class="btnAdd" id=${elemento.id}>Agregar</button>
        </div>
        ` */

// este si anda y es el codigo de mathias

/* divProductos.innerHTML += `
<div>
    <h3>${elemento.nombre}</h3>
    <p>${elemento.precio}</p>
    <button class="btnAdd" id=${elemento.id}>Agregar</button>
</div>
` */

//PERO SE VE IGUALLLLLL 