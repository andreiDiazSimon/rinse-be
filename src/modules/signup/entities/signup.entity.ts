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

  @Column({ length: 500, nullable: true })  // home address can be longer and optional
  homeAddress: string;

  @Column({ length: 20, nullable: true })  // phone number optional
  phoneNumber: string;
}
