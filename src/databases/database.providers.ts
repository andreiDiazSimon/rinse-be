import { DataSource } from 'typeorm';
import { AppDataSource } from './data-source';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return await AppDataSource.initialize().then((goodz) => {
        console.log('database goodz man');
        return goodz;
      });
    },
  },
];
