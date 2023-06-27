import { Router } from "express";
import UserService from "../controllers/UserController";
const routers = Router();

routers.use("/users", UserService);

export default routers;