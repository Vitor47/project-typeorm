import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateCategoriasTable1687907610389 } from "./migrations/1687907610389-CreateCategoriasTable";
import { CreateGastosTable1687907141169 } from "./migrations/1687907141169-CreateGastosTable";
import Gastos from "../app/entities/Gastos";
import Categorias from "../app/entities/Categorias";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 33063,
    username: "root",
    password: "root",
    database: "trabalho",
    synchronize: true,
    logging: false,
    entities: [Gastos, Categorias],
    migrations: [
        CreateGastosTable1687907141169,
        CreateCategoriasTable1687907610389,
    ],
    subscribers: [],
})