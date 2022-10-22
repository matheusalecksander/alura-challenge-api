import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from 'src/usecases/users/users.service';

@Controller()
export class  UsersController {
  constructor (private readonly usersService: UsersService) {}

  @Post('/auth')
  async login(@Body() { email, password }): Promise<string> {
    return this.usersService.login(email, password);
  }
}