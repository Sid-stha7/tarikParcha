import { Injectable } from '@nestjs/common';

import { UpdateCaseDto } from './dto/update-case.dto';
import { CaseEntity } from './entities/case.entity';
import { CreateCaseDto } from './dto/create-case.dto';

@Injectable()
export class CaseHelper {
  caseFunc(caseEntity: CaseEntity, data: CreateCaseDto): CaseEntity {
    if (data.serial_number) {
      caseEntity.serial_number = data.serial_number;
    }

    if (data.location) {
      caseEntity.location = data.location;
    }

    if (data.registration_date) {
      caseEntity.registration_date = data.registration_date;
    }

    if (data.issue) {
      caseEntity.issue = data.issue;
    }

    if (data.issue_number) {
      caseEntity.issue_number = data.issue_number;
    }

    if (data.party_opposition) {
      caseEntity.party_opposition = data.party_opposition;
    }

    if (data.code_number) {
      caseEntity.code_number = data.code_number;
    }

    if (data.indication) {
      caseEntity.indication = data.indication;
    }

    if (data.attorneys_view) {
      caseEntity.attorneys_view = data.attorneys_view;
    }

    if (data.details) {
      caseEntity.details = data.details;
    }

    // if (data.isverified !== undefined) {
    //   caseEntity.isverified = data.isverified;
    // }

    // if (data.roleId !== undefined) {
    //   caseEntity.roleId = data.roleId;
    // }

    return caseEntity;
  }

  caseUpdate(caseEntity: CaseEntity, data: UpdateCaseDto): CaseEntity {
    if (data.serial_number !== undefined) {
      caseEntity.serial_number = data.serial_number;
    }

    if (data.location !== undefined) {
      caseEntity.location = data.location;
    }

    if (data.registration_date !== undefined) {
      caseEntity.registration_date = data.registration_date;
    }

    if (data.issue !== undefined) {
      caseEntity.issue = data.issue;
    }

    if (data.issue_number !== undefined) {
      caseEntity.issue_number = data.issue_number;
    }

    if (data.party_opposition !== undefined) {
      caseEntity.party_opposition = data.party_opposition;
    }

    if (data.code_number !== undefined) {
      caseEntity.code_number = data.code_number;
    }

    if (data.indication !== undefined) {
      caseEntity.indication = data.indication;
    }

    if (data.attorneys_view !== undefined) {
      caseEntity.attorneys_view = data.attorneys_view;
    }

    if (data.details !== undefined) {
      caseEntity.details = data.details;
    }

    return caseEntity;
  }
}
