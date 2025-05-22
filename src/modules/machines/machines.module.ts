import { Module } from '@nestjs/common';
import { MachinesService } from './machines.service';
import { MachinesController } from './machines.controller';
import { DatabaseModule } from 'src/databases/database.module';
import { machineProviders } from './machines.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [MachinesController],
  providers: [...machineProviders, MachinesService],
})
export class MachinesModule {}
