export class CreateReservationDto {
  userId: number;
  service: 'wash & dry' | 'fold' | 'press';
  kilos: number;
  date?: string;
}
