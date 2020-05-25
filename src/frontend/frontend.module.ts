import { Module } from '@nestjs/common';
import { FrontendResolver } from './frontend.resolver';
import { FrontendService } from './frontend.service';
import { Frontend } from './models/frontend.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Frontend])],
  providers: [FrontendResolver, FrontendService],
})
export class FrontendModule {}
