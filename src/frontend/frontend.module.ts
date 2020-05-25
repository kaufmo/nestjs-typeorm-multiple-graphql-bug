import { Module } from '@nestjs/common';
import { FrontendResolver } from './frontend.resolver';
import { FrontendService } from './frontend.service';

@Module({
  providers: [FrontendResolver, FrontendService],
})
export class FrontendModule {}
