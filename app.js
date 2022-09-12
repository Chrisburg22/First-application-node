require('colors');
const { menuInquirer,pausa } = require('./helpers/inquirer');
console.clear();

const main = async() => {
    console.log("Hola mundo");

    let opt = ' ';

    do {
        opt = await menuInquirer();
        await pausa();
    }while( opt !== '0' );
    

}

main();