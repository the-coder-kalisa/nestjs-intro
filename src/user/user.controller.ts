import { Body, Controller, Post } from '@nestjs/common';
import { userProvider } from './user.provider';

@Controller('user')
export class UserController {
  constructor(private readonly userService: userProvider) {}
  @Post('/signup')
  async signup(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<string> {
    return  await this.userService.signup(name, email, password);
  }
}
