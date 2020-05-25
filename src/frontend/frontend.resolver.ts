import { Query, Resolver } from '@nestjs/graphql';
import { FrontendService } from './frontend.service';
import { Frontend } from './models/frontend.model';

@Resolver(() => Frontend)
export class FrontendResolver {
  constructor(private readonly frontendService: FrontendService) {}

  @Query(() => [Frontend])
  async frontend(): Promise<Frontend[]> {
    return this.frontendService.findAll();
  }
}
