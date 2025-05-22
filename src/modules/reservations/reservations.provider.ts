import { DataSource } from 'typeorm';
import { Reservation } from './reservations.entity';

export const reservationProviders = [
  {
    provide: 'RESERVATION_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(Reservation);
    },
    inject: ['DATA_SOURCE'],
  },
];
