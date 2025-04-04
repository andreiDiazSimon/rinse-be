import { Injectable, Inject, ConflictException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SignupEntity } from './entities/signup.entity';

@Injectable()
export class SignupService {
  constructor(
    @Inject('SIGNUP_REPOSITORY')
    private signupRepository: Repository<SignupEntity>,
  ) {}

  async findAllSignup(): Promise<SignupEntity[]> {
    return this.signupRepository.find({
      order: { id: 'DESC' },
      take: 3,
    });
  }

  async addUserSignup(signupData: Partial<SignupEntity>): Promise<Object> {
    try {
      const existingUser = await this.signupRepository.findOne({
        where: { name: signupData.name },
      });
      if (existingUser) {
        throw new ConflictException('Name is already taken');
      }
      const newUser = this.signupRepository.create(signupData);
      const irereturn = await this.signupRepository.save(newUser);
      console.log(await this.findAllSignup());
      return { signupStatus: true };
    } catch (error) {
      return error;
    }
  }
}
