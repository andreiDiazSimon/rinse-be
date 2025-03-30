import { DataSource } from 'typeorm';
import { SignupEntity } from '../modules/signup/entities/signup.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'rinse',
  entities: [SignupEntity],
  migrationsTableName: 'migrations',
  synchronize: true,
  logging: true,
});
