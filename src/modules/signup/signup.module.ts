import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { signupProviders } from './providers/signup.providers';
import { SignupService } from './signup.service';
import { DatabaseModule } from 'src/databases/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SignupController],
  providers: [...signupProviders, SignupService],
  exports: [...signupProviders],
})
export class SignupModule {}
