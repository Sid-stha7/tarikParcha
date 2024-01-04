import { Module } from '@nestjs/common';
import { CaseController } from './caase.controller';
import { CaseService } from './caase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaseEntity } from './entities/case.entity';
import { CaseHelper } from './case.helper';
import { UserEntity } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CaseEntity, UserEntity])],
  controllers: [CaseController],
  providers: [CaseService, CaseHelper],
})
export class CasesModule {}
