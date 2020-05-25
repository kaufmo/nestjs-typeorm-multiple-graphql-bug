import { Injectable } from '@nestjs/common';
import { Admin } from './models/admin.model';

@Injectable()
export class AdminService {

  async findAll(): Promise<Admin[]> {
    return [];
  }
}
