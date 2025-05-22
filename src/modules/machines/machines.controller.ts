import {
  Patch,
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
} from '@nestjs/common';
import { MachinesService } from './machines.service';
import { CreateMachineDto } from './machines.dto';

@Controller('machines')
export class MachinesController {
  constructor(private readonly machinesService: MachinesService) {}

  @Get()
  findAll() {
    return this.machinesService.findAll();
  }

  @Post()
  create(@Body() createMachineDto: CreateMachineDto) {
    return this.machinesService.create(createMachineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machinesService.remove(+id);
  }

  @Patch(':id/toggle')
  toggleAvailability(@Param('id') id: string) {
    return this.machinesService.toggleAvailability(+id);
  }
}
