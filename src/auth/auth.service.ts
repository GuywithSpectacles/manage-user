import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto';
import Config from '../config/keys';
import * as nano from 'nano';

@Injectable()
export class AuthService {
  private db;

  constructor() {
    const couch = nano(Config.url); //Couchdb url
    this.db = couch.use('user'); // Database name
  }

  async registerUser(createUserDto: UserDTO) {
    return { msg: 'I have signed up' };
  }

  async login() {
    return { msg: 'I have logged in' };
  }

  async refreshToken() {
    return { msg: 'The token has been refreshed' };
  }

  async logout() {
    return { msg: 'You have been logged out' };
  }
}
