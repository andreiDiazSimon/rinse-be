import {
  Controller,
  HttpCode,
  NotFoundException,
  Delete,
  Post,
  Body,
  Get,
  Patch,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './reservations.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.create(createReservationDto);
  }

  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  @Patch(':id')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: 'approved' | 'rejected' | 'pending' | 'completed',
  ) {
    return this.reservationsService.updateStatus(id, status);
  }

  @Delete(':id')
  @HttpCode(204) // No content response on success
  async deleteReservation(@Param('id') id: string) {
    const deleted = await this.reservationsService.delete(id);
    if (!deleted) {
      throw new NotFoundException('Reservation not found');
    }
  }



@Get('user/:userId')
getUserReservations(@Param('userId', ParseIntPipe) userId: number) {
  return this.reservationsService.findByUserId(userId);
}
}
