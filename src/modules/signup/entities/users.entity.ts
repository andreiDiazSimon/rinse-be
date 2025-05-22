import { Entity, OneToMany, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Reservation } from 'src/modules/reservations/reservations.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column()
  password: string;

  @Column({ length: 500, nullable: true }) // home address can be longer and optional
  homeAddress: string;

  @Column({ length: 20, nullable: true }) // phone number optional
  phoneNumber: string;

  @Column({ default: 'customer' }) role: 'customer' | 'admin';

  @OneToMany(() => Reservation, (r) => r.user)
  reservations: Reservation[];
}
