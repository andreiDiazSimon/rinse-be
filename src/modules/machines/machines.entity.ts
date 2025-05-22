import {
  Entity,
  OneToMany,
  ManyToOne,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Reservation } from '../reservations/reservations.entity';
@Entity('machines')
export class Machine {
  @PrimaryGeneratedColumn() id: number;
  @Column() machineNumber: string;
  @Column({ default: true }) isAvailable: boolean;

  @OneToMany(() => Reservation, (r) => r.machine)
  reservations: Reservation[];
}
