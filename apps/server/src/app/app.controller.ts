import { All, Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { type Response } from 'express'

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  sendApplication(@Res() res: Response) {
    res.sendFile('index.html');
  }
}
