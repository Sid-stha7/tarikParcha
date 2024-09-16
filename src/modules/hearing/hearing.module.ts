import { Module } from '@nestjs/common';
import { HearingService } from './hearing.service';
import { HearingController } from './hearing.controller';

@Module({
  controllers: [HearingController],
  providers: [HearingService]
})
export class HearingModule {}
