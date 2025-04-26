import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path';
import { DatafeedModule } from '../datafeed/datafeed.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join('..', '..', '..', '..', 'public')
    }),
    DatafeedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
