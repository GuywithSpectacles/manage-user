import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: UserDTO) {
    return this.authService.registerUser(createUserDto);
  }

  async login() {
    return this.authService.login;
  }

  async refreshToken() {
    return this.authService.refreshToken;
  }

  async logout() {
    return this.authService.logout;
  }
}
