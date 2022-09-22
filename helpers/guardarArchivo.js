const fs =  require('fs'); 

const archivo = './db/data.json'

const guardarDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () => {//Funcion para leer la base de datos
//Si el archivo no axiste
if( !fs.existsSync(archivo) ){
    return null;
    }

   //Lee el archivo y guarda su contenido en la variable info
    const info = fs.readFileSync( archivo );
   //Tranforma el string info a un array de objetos con JSON.parse 
    const data = JSON.parse( info );

  //console.log(data);

    return data;

}

module.exports = {
    guardarDB,
    leerDB
}