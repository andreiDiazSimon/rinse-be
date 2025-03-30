import { Injectable, Inject, ConflictException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SignupEntity } from '../signup/entities/signup.entity';
@Injectable()
export class SigninService {
  constructor(
    @Inject('SIGNUP_REPOSITORY')
    private signinRepository: Repository<SignupEntity>,
  ) {}

  async findSingleSigninUser(signinData: {
    name: string;
    password: string;
  }): Promise<Object> {
    try {
      let user = await this.signinRepository.findOne({
        where: { name: signinData.name, password: signinData.password },
      });
      if (!user) {
        throw new ConflictException('user not found');
      }
      return { signinStatus: true };
    } catch (error) {
      return error;
    }
  }
}
