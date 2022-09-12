const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué deseas hacer?',
        choices: ['opc1','opc2','opc3']
    }
];


const menuInquirer = async( ) => {
    
        console.clear();
        console.log('========================'.magenta);
        console.log('  Selecione una opción'.magenta);
        console.log('========================'.magenta);

        const opt = await inquirer.prompt(menuOpts);
        return opt;
}

module.exports = {
    menuInquirer
}