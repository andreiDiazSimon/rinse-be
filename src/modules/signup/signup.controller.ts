import { Controller, Patch, Param, Body, Post, Get } from '@nestjs/common';
import { SignupService } from './signup.service';

@Controller('/signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Get()
  getSignup() {
    return { signup: 'get' };
  }

  @Post()
  async postSignup(@Body() body: any) {
    console.log('\x1b[36m%s\x1b[0m', '/signup request payload:', body);
    return await this.signupService.addUserSignup(body);
  }

  @Patch(':id')
  async updateSignup(@Param('id') id: string, @Body() body: any) {
    return this.signupService.updateUser(+id, body);
  }
}
