import { Injectable } from '@nestjs/common';
import { IInfoApiType } from 'src/interfaces/interface.global';

@Injectable()
export class AppService {
  constructor() {}
  getInfoApi(): IInfoApiType {
    return {
      name: 'Ecommerce API',
      version: '1.0.0',
      author: 'Luca Dev',
      swagger: '/swagger',
      description: 'New Ecommerce API',
    };
  }
}
