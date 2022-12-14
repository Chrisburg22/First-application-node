require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { menuInquirer,
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        listadoCompletar
 } = require('./helpers/inquirer');

//const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
console.clear();

const main = async() => {
    let opt = ' ';
    
    const tareas = new Tareas; // Estas variables estan guardadas en memoria asi que solo podemos utilizarlas cunado el programa de node este en ejecucion

    const tareasBD = leerDB();

    if( tareasBD ){
//Establecer las tareas
        tareas.cargarTareasFromArray( tareasBD );
    }


    do { 
        //Imprime menu
        opt = await menuInquirer(); // Nos retona la opcion seleccionada y la guarda en la variable opt

        switch(opt){
            case '1':
                //Creamos tareas
                //Nos ayuda a interactuar con el usuario
                const desc = await leerInput('Ingresa una descripción:');
                //Utiliza el metodo crearTarea y recibe como argumento lo retornado por leerInput
                tareas.crearTarea(desc);
                break;
            case '2':
                //console.log(tareas._listado); // Se enlistas las tareas con el listado
                //console.log(tareas.listadoArr);
                //tareas.listadoCompleto();
                tareas.listadoFernando();
                await pausa();
                break;
            case '3':
                tareas.listarCompletadasPendientes();
                await pausa();
                break;
            case '4':
                tareas.listarCompletadasPendientes(false);
                await pausa();
                break;
            case '5':
                const ids = await listadoCompletar( tareas.listadoArr);//La funcion recibe como parametro una variable de tipo array
                tareas.toggleCompletadas( ids );
                await pausa();
                break;
            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if(id !== '0'){
                    const ok =  await confirmar('Seguro de eliminar eliminar');
                    if(ok){
                        tareas.borrarTarea(id);
                        console.log("Tarea eliminada");
                    }
                }
                await pausa();
                break;

        }
        
        guardarDB(tareas.listadoArr)

        


    }while( opt !== '0' );
    

}

main();