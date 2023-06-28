import { Request, Response, Router } from "express";
import CategoriaRepository from "../repositories/CategoriaRepository";

const categoriaRouter = Router();

categoriaRouter.get("/", async (req: Request, res: Response): Promise<Response> => {
    const users = await CategoriaRepository.getCategorias();

    return res.status(200).json(users);
});

export default categoriaRouter;