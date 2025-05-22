import { DataSource } from 'typeorm';
import { User } from 'src/modules/signup/entities/users.entity';
import { Machine } from 'src/modules/machines/machines.entity';
import { ReservationService } from 'src/modules/reservations/reservation-service.entity';
import { Reservation } from 'src/modules/reservations/reservations.entity';
import { Service } from 'src/modules/services/services.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'rinse',
  entities: [User, Machine, ReservationService, Reservation, Service],
  migrationsTableName: 'migrations',
  synchronize: true,
  logging: true,
});
