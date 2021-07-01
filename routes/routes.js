import express from "express";
import { accionesUsuario, agregarAccion, borrarAccion, listarAccionesUsuario, login } from "../controllers/index.js";

const routes = express.Router()

routes.post("/login", login)

routes.get('/accionesusuarios/accion/:id', accionesUsuario)

routes.post("/add", agregarAccion)

routes.delete("/delete/:id", borrarAccion)

routes.get('/accionesusuarios/:id', listarAccionesUsuario)

export default routes;
