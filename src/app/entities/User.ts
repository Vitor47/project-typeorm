import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
    
  @Entity('users')
  class User {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column('varchar', { length: 100 })
    name: string;
  
    @Column('varchar', { length: 100 })
    email: string;

    @Column('varchar', { length: 100 })
    password: string;

    @Column()
    birthDate: Date;

    @Column('boolean', { default: true })
    active: boolean;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  }
  
  export default User;