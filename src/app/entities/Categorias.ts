import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

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
}

export default Categorias;
