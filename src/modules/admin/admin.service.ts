import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AdminService {
  signIn(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      return { message: 'Login successful', role: 'admin' };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
