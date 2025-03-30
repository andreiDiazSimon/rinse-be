import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('signup')
export class SignupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column()
  password: string;
}
