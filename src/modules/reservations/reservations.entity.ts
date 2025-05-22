import {
  Entity,
  OneToMany,
  ManyToOne,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../signup/entities/users.entity';
import { Machine } from '../machines/machines.entity';
import { ReservationService } from './reservation-service.entity';

@Entity('reservations')
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  // reservations.entity.ts snippet
  @ManyToOne(() => User, (user) => user.reservations, { eager: true }) // eager loads user data automatically
  user: User;

  // Add this if Reservation has a machine
  @ManyToOne(() => Machine, (m) => m.reservations, { nullable: true })
  machine: Machine;

  // Add this to fix reservationServices reference
  @OneToMany(() => ReservationService, (rs) => rs.reservation, {
    cascade: true,
  })
  reservationServices: ReservationService[];

  @Column()
  service: string;

  @Column('int')
  kilos: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  status: 'pending' | 'approved' | 'rejected' | 'completed';

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
