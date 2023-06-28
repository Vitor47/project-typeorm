import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';

  import Categorias from "./Categorias"
  @Entity('gastos')
  class Gastos {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', {length: 255, nullable: false})
    descricao: string;

    @Column('float', {nullable: false})
    valor: number;

    @Column()
    data:Date;

    @Column('boolean', { default: true })
    active: boolean;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToMany(() => Categorias)
    @JoinTable()
    categories: Categorias[]
  } 
  export default Gastos;