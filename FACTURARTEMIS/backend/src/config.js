// 1. Importar desde dotenv el objeto llamado "config" //
// "config" -> Es un objeto de dotenv el cual me habilita los datos registrados en el archivo de variables de entorno ".env"
import {config} from "dotenv";


// 2. Invocamos al metodo config // 
config();


// 3. Exportamos en un objeto todas las variables de entorno a traves del método config //
    // 3.1 Manera donde los valores serian visibles
    /* export default {
        host : "localhost",
        database :  "facturartemis",
        user : "root",
        password :  ""
    } */

    // 3.2 Manera donde los valores estarian ocultos 
    export default {
        host : process.env.HOST,
        database :  process.env.DATABASE,
        user : process.env.USER,
        password :  process.env.PASSWORD
    }