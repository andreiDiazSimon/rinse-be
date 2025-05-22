import {
  Injectable,
  Inject,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class SignupService {
  constructor(
    @Inject('SIGNUP_REPOSITORY')
    private signupRepository: Repository<User>,
  ) {}

  async findAllSignup(): Promise<User[]> {
    return this.signupRepository.find({
      order: { id: 'DESC' },
      take: 3,
    });
  }

  async addUserSignup(signupData: Partial<User>): Promise<Object> {
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

  async updateUser(id: number, updateData: Partial<User>) {
    console.log(updateData);
    const user = await this.signupRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, updateData);
    return this.signupRepository.save(user);
  }
}
