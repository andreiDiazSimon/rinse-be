import { Module } from '@nestjs/common';
import { SigninController } from './signin.controller';
import { SigninService } from './signin.service';
import { SignupModule } from '../signup/signup.module';

@Module({
  imports: [SignupModule],
  controllers: [SigninController],
  providers: [SigninService],
})
export class SigninModule {}
