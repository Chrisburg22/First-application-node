//Aqui se interactua con el arcvhio de la base de datos

const fs =  require('fs'); //Creando una instancia del objeto 'fs'(File System)

/**
 * @param {*Sera la informacion almacenada de manera persistente en el archivo data.js} data 
 * Funcion que nos permitira almacenar informacion de manera persistente en nuestra aplicacion
 */

const guardarDB = (data) => {
//Se crea una constante, es un string con la ruta y el nombre del nuevo archivo, en el cual se almacenara la informacion de las tareas
    const archivo = './db/data.json'

/**
 * Se utiliza el metodo writeFileSync del objeto 'fs' para escribir la información en el nuevo archivo
 * Se necesitan dos argumentos: 
 * 1.-El archivo en donde se va a escribir
 * 2.-Una variable de tipo objeto, en este caso se recibe un string pero con JSON.stringify lo tranformamos en un objeto 
 * 
*/
    fs.writeFileSync(archivo, JSON.stringify(data));
}

module.exports = {
    guardarDB
}