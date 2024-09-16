import { Module } from '@nestjs/common';
import { CaseController } from './caase.controller';
import { CaseService } from './caase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaseEntity } from './entities/case.entity';
import { UserEntity } from '../users/entities/user.entity';
import { CourtEntity } from '../court/entities/court.entity';
import { CaseHelper } from './case.helper';

@Module({
  imports: [TypeOrmModule.forFeature([CaseEntity, UserEntity, CourtEntity])],
  controllers: [CaseController],
  providers: [CaseService, CaseHelper],
})
export class CasesModule {}
