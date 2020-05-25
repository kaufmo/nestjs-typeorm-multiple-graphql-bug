import { Injectable } from '@nestjs/common';
import { Frontend } from './models/frontend.model';

@Injectable()
export class FrontendService {
  async findAll(): Promise<Frontend[]> {
    return [];
  }
}
