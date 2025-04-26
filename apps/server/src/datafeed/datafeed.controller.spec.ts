import { Test, TestingModule } from '@nestjs/testing';
import { DatafeedController } from './datafeed.controller';

describe('DatafeedController', () => {
  let controller: DatafeedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatafeedController],
    }).compile();

    controller = module.get<DatafeedController>(DatafeedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
