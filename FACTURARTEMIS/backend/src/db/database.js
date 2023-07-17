// 1. Importar a mysql de mi dependencies promise-mysql //
// promise-mysql -> nos permite gestionar de manera asincrona la conexion desde node.js al gestor de datos sql
import mysql from "promise-mysql";

// 2. Importar el config del archivo "config.js" //
import config from "./../config.js"; 

// 3. Constante para llamar los recursos de mysql y despues traer las variables de entorno. //
const connection = mysql.createConnection({
    host : config.host,
    database : config.database,
    user : config.user,
    password : config.password
})

// 4. Retornar "connection" , pero no como una constante sino como una función //
const getConnection = () => {
    return connection;
}

// 5. Exportar getConnection para disponerla para el resto de modulos del programa //
export default getConnection;