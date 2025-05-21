import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { SignupModule } from './modules/signup/signup.module';
import { SigninModule } from './modules/signin/signin.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [SignupModule, SigninModule, AdminModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
