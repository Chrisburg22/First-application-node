require('colors');

const mostrarMenu = () => {

    return new Promise( ( resolve =>{
        console.clear();
        console.log('========================'.magenta);
        console.log('  Selecione una opción'.magenta);
        console.log('========================'.magenta);
    
        console.log(`${ '1.'.magenta} Crear tarea`);    
        console.log(`${ '2.'.magenta} Listar tarea`);      
        console.log(`${ '3.'.magenta} Listar tareas compleatadas`);
        console.log(`${ '4.'.magenta} Listar tareas pendientes`);
        console.log(`${ '5.'.magenta} Completar tareas`);
        console.log(`${ '6.'.magenta} Borrar tarea`);
        console.log(`${ '0.'.magenta} Salir\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
         });

        readline.question('Selecione una opción: ', (opt) => {
            readline.close();
            resolve( opt );
        });
    }));
       

}

const pause = () => {

    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
         });
    
         readline.question(`Presiona ${'ENTER'.magenta} para continuar`, (opt) => {
            readline.close();
            resolve();
         });
    });
    
}

module.exports = {
    mostrarMenu,
    pause
}