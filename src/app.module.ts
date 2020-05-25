import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Connection } from 'typeorm';
import { FrontendModule } from './frontend/frontend.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      key: 'kaufmo',
      synchronize: true,
      migrationsRun: true,
      entities: ["dist/**/*.model{.ts,.js}"],
      migrations: ["dist/db/migrations/*{.ts,.js}"],
      subscribers: ["dist/db/subscribers/*{.ts,.js}"],
      cli: {
        migrationsDir: "src/db/migrations",
        subscribersDir: "src/db/subscribers",
      },
    }),
    GraphQLModule.forRootAsync({
      imports: [AdminModule],
      useFactory: () => ({
        include: [AdminModule],
        autoSchemaFile: 'admin.gql',
        debug: true,
        playground: true,
        installSubscriptionHandlers: true,
        path: '/admin',
      })
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
      })
    }),
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
