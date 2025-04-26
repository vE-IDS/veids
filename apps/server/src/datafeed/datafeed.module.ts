import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { DatafeedService } from './datafeed.service';
import { DatafeedController } from './datafeed.controller';
@Module({
    imports: [HttpModule],
    controllers: [DatafeedController],
    providers: [DatafeedService]
})
export class DatafeedModule {
    constructor(private readonly datafeedService: DatafeedService) {}
}
