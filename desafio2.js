const fs=require ("fs").promises

class Contenedor {
    constructor (path){
        this.path = path
    }

    save(){

    }
    getById(){

    }
    async getAll(){
        const leer = await fs.readFile(this.path, "utf-8") 
        return JSON.parse(leer)
    }
    deleteById(){

    }
    deteeAll(){

    }
}
module.exports = Contenedeor
/*
Donde va una promesa automaticamente debo definir "async" al método donde voy a trabajar. Todo lo que tenga demora es asincrono!
tiene que leer un archivo que no está en el es script, eso requerira tiempo, por lo que es asincrono.

 # Si esta en el mismo script hacemos una función sincrona común.
 
linea: 15 col: 28, como es un archivo Json se parsea entonces returnamos: linea 16

/fs linea 1 devuelve un objeto que es una promesa. (arregla el error de los 3 puntos que aparece en await)
 */