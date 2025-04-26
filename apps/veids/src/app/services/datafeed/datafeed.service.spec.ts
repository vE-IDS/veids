import { Test, TestingModule } from '@nestjs/testing';
import { DatafeedService } from './datafeed.service';

describe('DatafeedService', () => {
  let service: DatafeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatafeedService],
    }).compile();

    service = module.get<DatafeedService>(DatafeedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
