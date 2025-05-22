import { Entity, ManyToOne, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Reservation } from './reservations.entity';
import { Service } from '../services/services.entity';

@Entity('reservation_services')
export class ReservationService {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => Reservation,
    (reservation) => reservation.reservationServices,
  )
  reservation: Reservation;

  @ManyToOne(() => Service, (service) => service.reservationServices)
  service: Service;

  @Column('decimal', { precision: 5, scale: 2 })
  kilos: number; // kilos for this service
}
