import { Body, Injectable, Post } from "@nestjs/common";
import { AuthService } from "../../usecases/auth/auth.service";

@Injectable()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/auth/login')
  async login(@Body() { email, password }) {
    return this.authService.login(email, password)
  }
}