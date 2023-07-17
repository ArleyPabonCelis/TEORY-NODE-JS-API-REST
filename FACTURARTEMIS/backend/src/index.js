// index.js -> Archivo que lanza toda la aplicación, convergen todos los elementos del programa, del backend, es decir, se engranan o se alinean en este archivo.

// Seccion 2. Importaciones //
// 1. Importar app
import app from "./app.js";

// Seccion 1. Iniciar toda la aplicación: método main //
// 1. Realizar una arrow function (function expresation)
const main = () => {
    // 3. Utilizar app - Verificación de que funciona
    app.listen(app.get("port"));
    console.log(`The great super company's Server is running on port ${app.get("port")} `);
}

// 2. Invocar la funcion main
main();