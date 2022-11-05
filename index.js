const Conteiner = require ("./desafio2.js")
const productos = new Conteiner ("./productos.json")

async function misProductos (){

    const objeto5 ={
        nombre: "Micrófono",
        precio: 1000,
        thumbnail: "url"
    }
    const objeto4 ={
        nombre: "Audífonos",
        precio: 1500,
        thumbnail: "url"
    }
    const objeto3 = {
        nombre: "Teclado",
        precio: 2000,
        thumbnail: "url"
    }
    const objeto2 ={
        nombre: "Mouse",
        precio: "1500",
        thumbnail: "url"
    }
    const objeto1 ={
        nombre: "touchpad",
        precio: 1000,
        thumbnail: "url"
    }
    await productos.getById(1).then(id => console.log(id))
    await productos.save(objeto1)
    await productos.save(objeto2)
    await productos.save(objeto3)
    await productos.save(objeto4)
    await productos.save(objeto5)
}
misProductos()
/*
 await nos dice que lo que viene es una promesa "productos.getAll()" no es una funcion comun
 entonces usamos el #then para terminar de consumir los datos que trae el retorno

"await productos.getById(2)" esto es una promesa entonces para buscar el ID debo ponerlo de esta manera:
"await productos.getById(2).then(id → console.log(id))" 


*/