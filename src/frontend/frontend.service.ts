import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Frontend } from './models/frontend.model';

@Injectable()
export class FrontendService {
  constructor(
    @InjectRepository(Frontend)
    private readonly frontendRepository: Repository<Frontend>,
  ) {}

  async findAll(): Promise<Frontend[]> {
    return this.frontendRepository.find();
  }
}
