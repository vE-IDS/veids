import { Controller, Get, Res } from '@nestjs/common';
import { type Response } from 'express';
import { DatafeedService } from './datafeed.service';

@Controller('api/datafeed')
export class DatafeedController {
    constructor(private readonly datafeedService: DatafeedService) {}

    @Get('atis')
    async getAtisList(@Res() res: Response) {
        try {
            const atisList = await this.datafeedService.getAllAtis()
            res.send(atisList)
        }
            catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    }
}
