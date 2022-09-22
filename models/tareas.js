const { stringify } = require("uuid");
const Tarea = require("./tarea");
require('colors');

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

    //Instancia de tareas a partir de un array de objetos
    cargarTareasFromArray( tareas=[] ){
        tareas.forEach( ( tarea ) => {
            this._listado[ tarea.id ] = tarea; //Llenando el listado de tareas 
        });
    }

    //Nueva instancia Tarea
    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        // Insertar un objeto tarea a la propiedad de la terea del objeto _listado
        this._listado[tarea.id] = tarea; 
    }

    listadoCompleto(){
        
        let cont=1;

//En esta función el this hace referencia al metodo getter de la Clase, que nos retorna un arreglo y es por eso que podemos utilizar forEach
        this.listadoArr.forEach( (tarea) => {
            const aux = String(cont);
            console.log(`${aux.blue}. ${tarea.desc} :: ${(tarea.completadoEn) ? "Completada".magenta : "Pendiente".red}`);
            cont ++;
        })
    }

    listadoFernando(){
        this.listadoArr.forEach( (tarea, i) => {

            const idx = `${i+1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ?'Completada'.green :'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${estado}`);
        })
    }

    listarCompletadasPendientes( completadas = true ){
        
        if(completadas){

            let cont=1;
            this.listadoArr.forEach( (tarea, i) => {

                const { desc, completadoEn } = tarea;
                if(completadoEn){
                    const idx = `${cont}`.green;
                    const estado = 'Completada'.green;
                    console.log(`${idx} ${desc} :: ${estado}`);
                    cont++;
                }
                
            })

        } else {

            let cont=1;
            this.listadoArr.forEach( (tarea, i) => {
                
                const idx = `${cont}`.green;
                const { desc, completadoEn } = tarea;
                if(!completadoEn){
                    const estado = 'Pendiente'.red;
                    console.log(`${idx} ${desc} :: ${estado}`);
                    cont ++;
                }
                
            })

        }
    }

}
module.exports = Tareas;