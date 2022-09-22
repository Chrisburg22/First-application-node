//Este objeto nos ayudara a crear el id unico
const {v4: uuidv4} = require('uuid');

class Tarea {
    id   = '';
    desc = '';
    completadoEn = null; // Si es diferente a null la tarea esta terminada

    constructor( desc ){
        this.id=uuidv4();           
        this.desc = desc;
    }
 }

module.exports = Tarea;