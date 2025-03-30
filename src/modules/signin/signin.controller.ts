import { Controller, Post, Body } from '@nestjs/common';
import { SigninService } from './signin.service';

@Controller('/signin')
export class SigninController {
  constructor(private readonly signinService: SigninService) {}
  @Post()
  async postSignin(@Body() body: { name: string; password: string }) {
    console.log('\x1b[36m%s\x1b[0m', '/signin request payload:', body);
    return await this.signinService.findSingleSigninUser(body);
  }
}
