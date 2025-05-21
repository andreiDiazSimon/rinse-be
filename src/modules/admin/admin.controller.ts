import { Controller, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('sign-in')
  signIn(@Body() body: { username: string; password: string }) {
    return this.adminService.signIn(body.username, body.password);
  }
}
