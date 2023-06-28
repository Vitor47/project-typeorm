import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Gastos from "./Gastos";
import Categorias from "./Categorias";

@Entity("gastos_categorias")
class Gastos_Categorias {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Gastos, (gastos_categorias) => gastos_categorias.gastos)
  gastos: Gastos;

  @ManyToOne(
    () => Categorias,
    (gastos_categorias) => gastos_categorias.categorias
  )
  categorias: Categorias;
}

export default Gastos_Categorias;
