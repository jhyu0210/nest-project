import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CatsModule } from './cats/cats.module';
import { LaunchModule } from './spacex/launch.module';

@Module({
  imports: [
    // CatsModule,
    LaunchModule,
    GraphQLModule.forRoot({
      // autoSchemaFile: join(process.cwd(), 'src/scehma.gql'),
      typePaths : ['./**/*.graphql'],
      definitions: {path: join(process.cwd(), 'src/graphql.ts')},
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
