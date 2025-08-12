import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Post('mail')
  sendEmail(@Body() body: { name: string; email: string }) {
    const { name } = body;
    return `The email is sent by this user: ${name}`;
  }
}
