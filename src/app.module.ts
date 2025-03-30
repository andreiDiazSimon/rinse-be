import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { SignupModule } from './modules/signup/signup.module';
import { SigninModule } from './modules/signin/signin.module';

@Module({
  imports: [SignupModule, SigninModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
