import { Body, Controller, Injectable, Post } from "@nestjs/common";
import { AuthService } from "../../usecases/auth/auth.service";

@Injectable()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  async login(@Body() { email, password }) {
    const result = this.authService.login(email, password);

    return result;
  }
}