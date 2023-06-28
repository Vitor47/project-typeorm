import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import Gastos_Categorias from "./Gastos_Categorias";
@Entity("gastos")
class Gastos {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("varchar", { length: 255, nullable: false })
  descricao: string;

  @Column("float", { nullable: false })
  valor: number;

  @Column()
  data: Date;

  @Column("boolean", { default: true })
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Gastos_Categorias, (photo) => photo.gastos)
  gastos: Gastos_Categorias[];
}
export default Gastos;
