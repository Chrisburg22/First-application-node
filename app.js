require('colors');
const { guardarDB } = require('./helpers/guardarArchivo');
const { menuInquirer,
        pausa,
        leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
console.clear();

const main = async() => {

    let opt = ' ';
    const tareas = new Tareas; // Estas variables estan guardadas en memoria asi que solo podemos utilizarlas cunado el programa de node este en ejecucion

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
                console.log(tareas.listadoArr);
                break;

        }
        
        ///guardarDB(tareas.listadoArr)

        await pausa();


    }while( opt !== '0' );
    

}

main();