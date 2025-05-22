import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Machine } from './machines.entity';
import { CreateMachineDto } from './machines.dto';

@Injectable()
export class MachinesService {
  constructor(
    @Inject('MACHINE_REPOSITORY')
    private machineRepository: Repository<Machine>,
  ) {}

  findAll() {
    return this.machineRepository.find();
  }

  create(createMachineDto: CreateMachineDto) {
    const machine = this.machineRepository.create(createMachineDto);
    return this.machineRepository.save(machine);
  }

  remove(id: number) {
    return this.machineRepository.delete(id);
  }

  async toggleAvailability(id: number) {
    const machine = await this.machineRepository.findOneBy({ id });
    if (!machine) return null;

    machine.isAvailable = !machine.isAvailable;
    return this.machineRepository.save(machine);
  }
}
