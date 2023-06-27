import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsersTable1686703083101 } from "./migrations/1686703083101-CreateUsersTable"
import { CreateCategoriasTable1687907610389 } from "./migrations/1687907610389-CreateCategoriasTable";
import { CreateGastosTable1687907141169 } from "./migrations/1687907141169-CreateGastosTable";
import User from "../app/entities/User";
import Gastos from "../app/entities/Gastos";
import Categorias from "../app/entities/Categorias";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "project",
    synchronize: true,
    logging: false,
    entities: [User, Gastos, Categorias],
    migrations: [
        CreateUsersTable1686703083101,
        CreateGastosTable1687907141169,
        CreateCategoriasTable1687907610389,
    ],
    subscribers: [],
})