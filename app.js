require('colors');
const { mostrarMenu, pause } = require('./helpers/mensaje.js');
const { menuInquirer } = require('./helpers/inquirer');
console.clear();

const main = async() => {
    console.log("Hola mundo");

    let opt = ' ';

    do {
        opt = await menuInquirer();
        //opt = await mostrarMenu();

        //
        await pause();

    }while( opt !== '0' );
    

}

main();