const fs=require ("fs").promises

class Contenedor {
    constructor (path){
        this.path = path
    }

    async save(objeto){
        try{
            const leer = await fs.readFile(this.path, "utf-8");
            const data= JSON.parse(leer)
            let id;
            data.length == 0
                ? (id = 1)
                : (id = data [data.length - 1].id + 1)
            const newProducto = {...objeto,id}
            data.push(newProducto)
             await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8")
            return newProducto.id
        }catch (e){
            console.log(e);
        }
    }
    async getById(id){
        try {
            const leer = await fs.readFile(this.path, "utf-8");
            const data = JSON.parse(leer)
            const obj = data.find(obj =>obj.id == id)
            if(!obj){
                return null
            }
            return obj
        } catch (e) {
            console.log(e);
        }
    }
    async getAll(){
        const leer = await fs.readFile(this.path, "utf-8");
        return JSON.parse(leer)
    }
    deleteById(){

    }
    async deleteAll(){
        try {
            await fs.writeFile(this.path , JSON.stringify([], null , 2), "utf-8")
        } catch (e){
            console.log(e);
        }
    }
}
module.exports = Contenedor
/*
Donde va una promesa automaticamente debo definir "async" al método donde voy a trabajar. Todo lo que tenga demora es asincrono!
tiene que leer un archivo que no está en el es script, eso requerira tiempo, por lo que es asincrono.

 # Si esta en el mismo script hacemos una función sincrona común.
 METODOS:
 / GetAll: lee mis archivos productos del JSON
linea: 15 col: 28, como es un archivo Json se parsea entonces returnamos: linea 16

/fs linea 1 devuelve un objeto que es una promesa. (arregla el error de los 3 puntos que aparece en await)
 
en la terminal: node index.js = no me tiene que devolver nada


try y catch nos ayuda a precindir el error que nos puede surgir siendro mas preciso en mostrar el problema y NODE nos dice el error.

# Save(): es el más díficil, este perteence al de crear. Haciendo bien este método podemos sacar la lógica de todos los demás.
siempre va a estar acompañado de un try & catch
*/  