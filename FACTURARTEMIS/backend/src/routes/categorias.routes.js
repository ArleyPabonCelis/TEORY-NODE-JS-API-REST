// 1. Importar el Router utilizando el framework express //
import {Router} from "express";

// 5. Importar categoria.controllers.js
import { methodsHTTP as categoriaController } from "../controllers/categoria.controllers.js";

// 2. Guardar el recurso del Router en una variable //
const router = Router();

// 4. Poner funcion al Router
/* router.get("/", (req, res) => {
    res.send("Categorias de FacturArtemis");
}) */

// 6. Poner funcion al  Router Modificación - GET - Se obtienen todos los datos
router.get("/", categoriaController.getCategorias);

// 7. Poner funcion al Router Modificacion - POST
router.post("/", categoriaController.addCategories);

// 8. Poner funcion al  Router Modificación - GET - Se obtiene un solo dato (se refiete a un solo objeto con sus datos). La ruta recibe un parámetro
router.get("/:id", categoriaController.getCategoria);

// 9. Poner funcion al Router Modificacion - DELETE - Elimina un solo dato. La ruta debe recibir como parametro el ID de la categoria a eliminar
router.delete("/:id", categoriaController.deleteCategoria);

// 10. Poner funcion al Router Modificacion - UDATE - Actualiza un solo dato. 
router.put("/:id", categoriaController.updateCategories);

// 3. Disponer el Router para toda la aplicación es decir exportarlo
export default router;
