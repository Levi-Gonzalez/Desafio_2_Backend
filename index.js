const Conteiner = requiere("./index.js")
const productos = new Conteiner ("./productos.json")

async function misProductos (){
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
    await productos.getAll().then(a=>console.log(a))


}
misProductos()