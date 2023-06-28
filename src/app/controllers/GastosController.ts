import { Request, Response, Router } from "express";
import GastosRepository from "../repositories/GastosRepository";

const gastosRouter = Router();

gastosRouter.get("/", async (req: Request, res: Response): Promise<Response> => {
    const users = await GastosRepository.getGastos();

    return res.status(200).json(users);
});

export default gastosRouter;