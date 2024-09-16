import { Injectable } from '@nestjs/common';
import { UpdateCaseDto } from './dto/update-case.dto';
import { CaseEntity } from './entities/case.entity';
import { CreateCaseDto } from './dto/create-case.dto';

@Injectable()
export class CaseHelper {
  caseFunc(caseEntity: CaseEntity, data: CreateCaseDto): CaseEntity {
    if (data.case_number !== undefined) {
      caseEntity.case_number = data.case_number;
    }

    if (data.case_type) {
      caseEntity.case_type = data.case_type;
    }

    if (data.case_title) {
      caseEntity.case_title = data.case_title;
    }

    if (data.case_date) {
      caseEntity.case_date = data.case_date;
    }

    // if (data.court_id) {
    //   caseEntity.court_id = data.court_id;
    // }

    if (data.judge_id) {
      caseEntity.judge_id = data.judge_id;
    }

    if (data.case_status) {
      caseEntity.case_status = data.case_status;
    }

    if (data.remarks) {
      caseEntity.remarks = data.remarks;
    }

    if (data.hearings) {
      caseEntity.hearings = data.hearings;
    }

    return caseEntity;
  }

  caseUpdate(caseEntity: CaseEntity, data: UpdateCaseDto): CaseEntity {
    if (data.case_number !== undefined) {
      caseEntity.case_number = data.case_number;
    }

    if (data.case_type !== undefined) {
      caseEntity.case_type = data.case_type;
    }

    if (data.case_title !== undefined) {
      caseEntity.case_title = data.case_title;
    }

    if (data.case_date !== undefined) {
      caseEntity.case_date = data.case_date;
    }
    //
    // if (data.court_id !== undefined) {
    //   caseEntity.court_id = data.court_id;
    // }

    if (data.judge_id !== undefined) {
      caseEntity.judge_id = data.judge_id;
    }

    if (data.case_status !== undefined) {
      caseEntity.case_status = data.case_status;
    }

    if (data.remarks !== undefined) {
      caseEntity.remarks = data.remarks;
    }

    if (data.hearings !== undefined) {
      caseEntity.hearings = data.hearings;
    }

    return caseEntity;
  }
}
