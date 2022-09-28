const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué deseas hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.-'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.-'.green} Listar tarea`
            },
            {
                value: '3',
                name: `${'3.-'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.-'.green} Listar  tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.-'.green} Completar tareas`
            },
            {
                value: '6',
                name: `${'6.-'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.-'.green} Salir\n`
            }
        ]
    }
];

const inputPausa = [
    {
        type: 'nputPausa',
        name: 'input pausa',
        message: `Presiona ${'ENTER'.magenta} para continuar`
    }
]

const menuInquirer = async( ) => {
    
        console.clear();
        console.log('========================'.red);
        console.log('  Selecione una opción'.black);
        console.log('========================\n'.red);

        const {opcion} = await inquirer.prompt(menuOpts);
        return opcion;
}

const pausa = async() => {
    return await inquirer.prompt(inputPausa);
}

const leerInput =  async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,//Hace referencia al parametro recibido ECMAScript
            validate( value ){//Creando funcion de validación dentro del objeto
                if( value.length === 0){//En el caso de que no se reciba ningun valor
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    //Utilizamos el inquirer para imprimir un mensaje y recibir una descripcion de tarea
    const {desc} = await inquirer.prompt(question);
    return desc;//Retornamos la descripcion recibida por el usuario
}

const listadoTareasBorrar = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {
        const idx = `${i+1}`.green  ;
        return{
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    });

    const preguntas = [
        {
            type:'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ];

    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (message) => {
    
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question);
    return ok;
}

const listadoCompletar = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {
        const idx = `${i+1}`.green  ;
        return{
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`,
            checked: ( tarea.compleatadoEn) ? true : false
        }
    });

    const preguntas = [
        {
            type:'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ];

    const {ids} = await inquirer.prompt(preguntas);
    return ids;
}

module.exports = {
    menuInquirer,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    listadoCompletar
}