import {
  Injectable,
  BadRequestException,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Reservation } from './reservations.entity';
import { User } from '../signup/entities/users.entity';
import { CreateReservationDto } from './reservations.dto';

@Injectable()
export class ReservationsService {
  constructor(
    @Inject('RESERVATION_REPOSITORY') // <-- use your provider token here
    private reservationRepo: Repository<Reservation>,
  ) {}

  private readonly servicePrices = {
    'wash & dry': 400,
    fold: 35,
    press: 90,
  };

  async create(dto: CreateReservationDto) {
    if (!this.servicePrices[dto.service]) {
      throw new BadRequestException('Invalid service');
    }
    if (dto.kilos <= 0) {
      throw new BadRequestException('Kilos must be greater than zero');
    }

    const price = dto.kilos * this.servicePrices[dto.service];

    const reservation = new Reservation();
    reservation.user = { id: dto.userId } as User;
    reservation.service = dto.service;
    reservation.kilos = dto.kilos;
    reservation.price = price;
    reservation.status = 'pending';

    return this.reservationRepo.save(reservation);
  }

  async delete(id: string): Promise<boolean> {
    const result: any = await this.reservationRepo.delete(id);
    return result.affected > 0;
  }

  async findAll() {
    return this.reservationRepo.find({
      relations: ['user'], // Include user info for admin display
      order: { createdAt: 'DESC' },
    });
  }

  async updateStatus(
    id: number,
    status: 'approved' | 'rejected' | 'pending' | 'completed',
  ) {
    const reservation = await this.reservationRepo.findOne({ where: { id } });
    if (!reservation) {
      throw new NotFoundException(`Reservation with id ${id} not found`);
    }
    reservation.status = status;
    return this.reservationRepo.save(reservation);
  }

  async findByUserId(userId: number) {
    return this.reservationRepo.find({
      where: { user: { id: userId } },
      order: { createdAt: 'DESC' },
      relations: ['user'], // optional if needed for display
    });
  }
}
