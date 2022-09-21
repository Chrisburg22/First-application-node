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
                name: `${'1.-'.magenta} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.-'.magenta} Listar tarea`
            },
            {
                value: '3',
                name: `${'3.-'.magenta} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.-'.magenta} Listar  tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.-'.magenta} Completar tareas`
            },
            {
                value: '6',
                name: `${'6.-'.magenta} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.-'.magenta} Salir\n`
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
        console.log('========================'.magenta);
        console.log('  Selecione una opción'.magenta);
        console.log('========================'.magenta);

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

module.exports = {
    menuInquirer,
    pausa,
    leerInput
}