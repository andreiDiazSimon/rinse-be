import { DataSource } from 'typeorm';
import { User } from '../entities/users.entity';

export const signupProviders = [
  {
    provide: 'SIGNUP_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(User);
    },
    inject: ['DATA_SOURCE'],
  },
];
