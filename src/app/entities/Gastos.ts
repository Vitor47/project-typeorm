import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
    
  @Entity('users')
  class Gastos {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', {length: 255, nullable: false})
    descricao: string;

    @Column('number', {nullable: false})
    valor: number;

    @Column()
    data:Date;

    @Column('boolean', { default: true })
    active: boolean;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }

  export default Gastos;