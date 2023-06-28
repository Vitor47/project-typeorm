import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import Gastos_Categorias from "./Gastos_Categorias";

@Entity("categorias")
class Categorias {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("varchar", { length: 100 })
  nome: string;

  @Column("boolean", { default: true })
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Gastos_Categorias, (photo) => photo.categorias)
  categorias: Gastos_Categorias[]
}

export default Categorias;
