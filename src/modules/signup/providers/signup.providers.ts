import { DataSource } from 'typeorm';
import { SignupEntity } from '../entities/signup.entity';

export const signupProviders = [
  {
    provide: 'SIGNUP_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(SignupEntity);
    },
    inject: ['DATA_SOURCE'],
  },
];
