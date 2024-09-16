import { Test, TestingModule } from '@nestjs/testing';
import { HearingController } from './hearing.controller';
import { HearingService } from './hearing.service';

describe('HearingController', () => {
  let controller: HearingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HearingController],
      providers: [HearingService],
    }).compile();

    controller = module.get<HearingController>(HearingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
