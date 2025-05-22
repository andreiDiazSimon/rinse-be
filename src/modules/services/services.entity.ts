import { Entity, OneToMany, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ReservationService } from '../reservations/reservation-service.entity';
@Entity('services')
export class Service {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column('decimal') price: number;

  @OneToMany(() => ReservationService, (rs) => rs.service)
  reservationServices: ReservationService[];
}
