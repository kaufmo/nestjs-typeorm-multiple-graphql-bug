import { Query, Resolver } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { Admin } from './models/admin.model';

@Resolver(() => Admin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Query(() => [Admin])
  async admin(): Promise<Admin[]> {
    return this.adminService.findAll();
  }
}
