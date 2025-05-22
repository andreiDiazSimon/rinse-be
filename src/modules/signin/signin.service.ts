import { Injectable, Inject, ConflictException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../signup/entities/users.entity';
@Injectable()
export class SigninService {
  constructor(
    @Inject('SIGNUP_REPOSITORY')
    private signinRepository: Repository<User>,
  ) {}

  async findSingleSigninUser(signinData: {
    name: string;
    password: string;
  }): Promise<Object> {
    try {
      const user = await this.signinRepository.findOne({
        where: { name: signinData.name, password: signinData.password },
      });

      if (!user) {
        throw new ConflictException('user not found');
      }

      // Return user details except password
      const { id, name, email, homeAddress, phoneNumber } = user;
      console.log('id: ', id);
      return {
        signinStatus: true,
        id,
        name,
        email,
        homeAddress,
        phoneNumber,
      };
    } catch (error) {
      return error;
    }
  }
}
