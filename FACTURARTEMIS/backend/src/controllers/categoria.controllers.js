// controllers -> controla las respuestas que el servidor envia al cliente.
// 3. Importar la coneccion del archivo "database.js"
import getConnection from "./../db/database.js"

// 1. Método para asignar el proceso de la respuesta al servidor //
// Practicamente es traernos la funcion que hicimos en el archivo "categorias.routes.js", pero no vamos a manejar send, sino el json
// json -> es lo que envian las API's
/* const getCategorias = (req, res) => {
    res.json({"Categoria" : "Electrodomesticos"});
}
*/

// 4. Método para asignar el proceso de la respuesta al servidor modificado, donde nos traemos los datos de la base de datos facturartemis //
// NOTA:  Manejar async - await
const getCategorias = async (req, res) => {
    try {
        // 4.1. Este primer await me garantiza la conectividad con el servidor
        const connection = await getConnection(); 
        //Recordando que el primer then se encargaba que habia conexion con el recurso que la API estaba compartiendo

        // 4.2. Este segundo await me permite consumir esos datos, necesitamos enviar una consulta de sql en donde nos regrese y nos devuelva de la tabla categorias los datos
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias"); //Mirar actividad 6 del archivo "3_process_apirest_httpget_mysql.txt" donde esta el paso a paso del llenado connection.query
        // El segundo then ya nos permitia a nosotros hacer lectura o consumir los datos de la API.

        // 4.3. Mandar a consola al result
        console.log(result);

        // 4.4. Utilizamos json para que nos regrese esa consulta, las filas y registros de la tabla en formato json
        res.json(result);
    } catch (error) {
        res.status(500); // 500-599 codigos de errores de coneccion
        res.send(error.message);
    }  
}


// 7. Realización del GET de una sola Categoria
const getCategoria = async (req, res) => {
    try {
        // 7.5. Recuperamos los parametros (destrucutrando los parametros)
        console.log(req.params);
        const {id} = req.params

        // 7.1. Este primer await me garantiza la conectividad con el servidor
        const connection = await getConnection(); 
        //Recordando que el primer then se encargaba que habia conexion con el recurso que la API estaba compartiendo

        // 7.2. Este segundo await me permite consumir esos datos, necesitamos enviar una consulta de sql en donde nos regrese y nos devuelva de la tabla categorias los datos de acuerdo al ID que querramos
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?", id); //Mirar Seccion 1/Actividad 2 del archivo "5_process_apirest_http_delete_update_getid.txt" donde esta el paso a paso del llenado connection.query
        // El segundo then ya nos permitia a nosotros hacer lectura o consumir los datos de la API.

        // 7.3. Mandar a consola al result
        console.log(result);

        // 7.4. Utilizamos json para que nos regrese esa consulta, las filas y registros de la tabla en formato json
        res.json(result);
    } catch (error) {
        res.status(500); // 500-599 codigos de errores de coneccion
        res.send(error.message);
    }  
}

// 5. Método para añadir datos a la base de datos 
const addCategories = async (req, res) => {
    try {
        // 5.2. Recibir la respuesta que envia el cliente postman y escribirla en la base de datos
            // 5.2.1. Destructurar las columnas de la tabla categorias
            const {CategoriaNombre, Descripcion, Imagen} = req.body;
            /* console.log(CategoriaNombre);
            console.log(Descripcion);
            console.log(Imagen); */

            // 5.2.2. Convertir esas variables en un objeto
            const category = {
                CategoriaNombre,
                Descripcion,
                Imagen
            }

        // 5.1. Prueba
        /* console.log(req.body); */
        /* const connection = await getConnection();
        res.json({"CategoriaNombre": "Ropa Femenina"}) */

        //5.3. Insertar datos en la base de datos
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO categorias SET ?", category );
        //Mirar actividad 10 del archivo "4_process_apirest_httppost_mysql.txt"  donde esta el paso a paso del llenado connection.query
        res.json(result);
    } catch (error) {
        res.status(500); // 500-599 codigos de errores de coneccion
        res.send(error.message);
    } 
}


// 9. Borrar Categoria de la base de datos
const deleteCategoria = async (req, res) => {
    try {
        // 9.5. Recuperamos los parametros (destrucutrando los parametros)
        const {id} = req.params

        // 9.1. Este primer await me garantiza la conectividad con el servidor
        const connection = await getConnection(); 
        //Recordando que el primer then se encargaba que habia conexion con el recurso que la API estaba compartiendo

        // 9.2. Este segundo await me permite consumir esos datos, necesitamos enviar una consulta de sql en donde nos regrese y nos devuelva de la tabla categorias los datos de acuerdo al ID que querramos
        const result = await connection.query("DELETE FROM categorias WHERE CategoriaID = ?", id); //Mirar Seccion 2/Actividad 2 del archivo "5_process_apirest_http_delete_update_getid.txt" donde esta el paso a paso del llenado connection.query
        // El segundo then ya nos permitia a nosotros hacer lectura o consumir los datos de la API.

        // 9.3. Mandar a consola al result
        console.log(result);

        // 9.4. Utilizamos json para que nos regrese esa consulta, las filas y registros de la tabla en formato json
        res.json(result);
    } catch (error) {
        res.status(500); // 500-599 codigos de errores de coneccion
        res.send(error.message);
    }  
}

// 10. Método para actualizar datos a la base de datos 
const updateCategories = async (req, res) => {
    try {
        // 10.2. Recuperamos el parametro ID (destrucutrando los parametros)
        const {id} = req.params
        // 10.3. Recibir la respuesta que envia el cliente postman y escribirla en la base de datos
            // 10.2.1. Destructurar las columnas de la tabla categorias
            const {CategoriaNombre, Descripcion, Imagen} = req.body;
            /* console.log(CategoriaNombre);
            console.log(Descripcion);
            console.log(Imagen); */

            // 10.2.2. Convertir esas variables en un objeto
            const category = {
                CategoriaNombre,
                Descripcion,
                Imagen
            }

        // 10.1. Prueba
        /* console.log(req.body); */
        /* const connection = await getConnection();
        res.json({"CategoriaNombre": "Ropa Femenina"}) */

        //10.4. Insertar datos en la base de datos
        const connection = await getConnection();
        const result = await connection.query("UPDATE categorias SET ? WHERE CategoriaID  = ?", [category, id] );
        //Mirar actividad 10 del archivo "4_process_apirest_httppost_mysql.txt"  donde esta el paso a paso del llenado connection.query
        res.json(result);
    } catch (error) {
        res.status(500); // 500-599 codigos de errores de coneccion
        res.send(error.message);
    } 
}

// 2. Exportar getCategorias dentro de un objeto
// 6. Exportar addCategorias en la misma funcion de methodsHTTP
// 8. Exportar getCategoria en la misma funcion de methodsHTTP
// 10. Exportar deleteCategoria en la misma funcion de methodsHTTP
// 12. Exportar updateCategories en la misma funcion de methodsHTTP
export const methodsHTTP = {
    /* getCategorias : getCategorias */ /* Forma mas larga */
    getCategorias, /* Forma corta, pero debe llamarse exactamente igual que la función */
    addCategories,
    getCategoria,
    deleteCategoria,
    updateCategories
}
