import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HearingService } from './hearing.service';
import { CreateHearingDto } from './dto/create-hearing.dto';
import { UpdateHearingDto } from './dto/update-hearing.dto';

@Controller('hearing')
export class HearingController {
  constructor(private readonly hearingService: HearingService) {}

  @Post()
  create(@Body() createHearingDto: CreateHearingDto) {
    return this.hearingService.create(createHearingDto);
  }

  @Get()
  findAll() {
    return this.hearingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hearingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHearingDto: UpdateHearingDto) {
    return this.hearingService.update(+id, updateHearingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hearingService.remove(+id);
  }
}
