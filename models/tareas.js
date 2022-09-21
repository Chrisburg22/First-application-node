const Tarea = require("./tarea");

/**
 * _listado:
 *         { 'uuid-12133-312312-2': { id:12 desc:ads, completadoEn:99898 }} 
 */
//Creacion de una clase
class Tareas{
    
    _listado = {}; //Propiedad de la clase

//Creando un getter que retorna un nuevo arreglo
    get listadoArr() {
        
        const listado = [];
        //Llenado del arreglo 
        Object.keys(this._listado).forEach( key => {//El jey retorna un arreglo y sobre ese arreglo utilizamos la función forEach para recorrer el arreglo 
            const tarea = this._listado[key];//La lleva e la utilizo para saber cual es la tera que tengo e inserlarla en la variable tarea. Extraigo la clase que ya esta ahi instanciada
            listado.push( tarea ); //Lleno el arreglo con las tareas
        });
        return listado;//Retornamos el arreglo ya lleno
    }

    constructor(){
        this._listado = {};
    }

    //Nueva instancia Tarea
    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        // Insertar un objeto tarea a la propiedad de la terea del objeto _listado
        this._listado[tarea.id] = tarea; 
    }
}

module.exports = Tareas;