// app.js -> Cada programa de NODE.JS tiene una aplicación //

// 1. Importar el framework express //
import express from "express";

// 5. Importar el enrutador (router). Como es el unico export default lo puedo importar con el nombre que yo quiera, no va a haber ningun problema, es decir categoriaRoutes = router //
import categoriaRoutes from "./routes/categorias.routes.js";

// 2.Guardar todo el poder del express en una variable //
const app = express();

// 4. Asignacion del puerto 
app.set("port", 5000);

// 8. Traduccion desde json --> Middleware //
app.use(express.json());


// 6. Utilizacion del enrutador -> categoriaRoutes //
/* use() -> Metodo de NODE.JS que entiende todos los metodos http (GET, PUT, POST, DELETE)   */
/* app.use(categoriaRoutes); */

// 7. Utilizacion de otro enrutador -> categorias Routes: creacion del agregado del link de busqueda //
app.use("/api/categorias", categoriaRoutes);

// 3. Exportar la varible app //
export default app;