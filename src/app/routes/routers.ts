import { Router } from "express";
import UserService from "../controllers/UserController";
import CategoriaService from "../controllers/CategoriasController";
import GastosService from "../controllers/GastosController";

const routers = Router();

routers.use("/users", UserService);
routers.use("/categorias", CategoriaService)
routers.use("/gastos", GastosService)

export default routers;