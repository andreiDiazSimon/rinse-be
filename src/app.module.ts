import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { SignupModule } from './modules/signup/signup.module';
import { SigninModule } from './modules/signin/signin.module';
import { AdminModule } from './modules/admin/admin.module';
import { MachinesModule } from './modules/machines/machines.module';
import { ReservationsModule } from './modules/reservations/reservations.module';
import { ServicesModule } from './modules/services/services.module';

@Module({
  imports: [
    SignupModule,
    SigninModule,
    AdminModule,
    MachinesModule,
    ReservationsModule,
    ServicesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
