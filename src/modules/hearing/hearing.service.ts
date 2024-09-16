import { Injectable } from '@nestjs/common';
import { CreateHearingDto } from './dto/create-hearing.dto';
import { UpdateHearingDto } from './dto/update-hearing.dto';

@Injectable()
export class HearingService {
  create(createHearingDto: CreateHearingDto) {
    return 'This action adds a new hearing';
  }

  findAll() {
    return `This action returns all hearing`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hearing`;
  }

  update(id: number, updateHearingDto: UpdateHearingDto) {
    return `This action updates a #${id} hearing`;
  }

  remove(id: number) {
    return `This action removes a #${id} hearing`;
  }
}
