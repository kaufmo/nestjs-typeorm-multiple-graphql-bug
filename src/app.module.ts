import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { GraphQLModule } from '@nestjs/graphql';
import { FrontendModule } from './frontend/frontend.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [AdminModule],
      useFactory: () => ({
        include: [AdminModule],
        autoSchemaFile: 'admin.gql',
        debug: true,
        playground: true,
        installSubscriptionHandlers: true,
        path: '/admin',
      }),
    }),
    GraphQLModule.forRootAsync({
      imports: [FrontendModule],
      useFactory: () => ({
        include: [FrontendModule],
        autoSchemaFile: 'frontend.gql',
        debug: true,
        playground: true,
        installSubscriptionHandlers: true,
        path: '/frontend',
      }),
    }),
  ],
})
export class AppModule {}
