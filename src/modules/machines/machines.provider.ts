import { DataSource } from 'typeorm';
import { Machine } from './machines.entity';

export const machineProviders = [
  {
    provide: 'MACHINE_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(Machine);
    },
    inject: ['DATA_SOURCE'],
  },
];
