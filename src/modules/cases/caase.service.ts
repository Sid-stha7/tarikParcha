import { BadRequestException, Injectable } from '@nestjs/common';

import { UpdateCaseDto } from './dto/update-case.dto';
import { CaseEntity } from './entities/case.entity';
import { CaseHelper } from './case.helper';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { I18nService } from 'nestjs-i18n';
import { removeFile } from 'src/utils/file-helper';
import { CasePagination } from './dto/fetch-all-pagination.dto';
import { CreateCaseDto } from './dto/create-case.dto';

@Injectable()
export class CaseService {
  constructor(
    @InjectRepository(CaseEntity)
    private readonly caseRepo: Repository<CaseEntity>,
    private readonly caseHelper: CaseHelper,
    private readonly i18n: I18nService,
  ) {}

  async create(
    createCaseDto: CreateCaseDto,
  ): Promise<{ data: CaseEntity; message: string }> {
    const baseCase = new CaseEntity();

    const mappedCase = this.caseHelper.caseFunc(baseCase, createCaseDto);

    const result = await this.caseRepo.save(mappedCase);

    return {
      data: result,
      message: this.i18n.t('messages.CASE_CREATED'),
    };
  }

  async findAll(
    options: CasePagination,
  ): Promise<{ data: CaseEntity[]; total: number; message: string }> {
    const take = Number(options.pageSize) || 10;
    const skip = (Number(options.pageNumber) - 1) * take || 0;
    const condition: any = {};

    if (options.search) {
      const searchParams = options.search.trim();

      condition.name = ILike(`%${searchParams}%`);
    }
    const [result, total] = await this.caseRepo.findAndCount({
      where: condition,
      order: { created_at: 'DESC' },
      take: take,
      skip: skip < 0 ? 0 : skip,
      withDeleted: false,
    });

    return {
      total,
      data: result,
      message: this.i18n.t('messages.CASE_FETCHED'),
    };
  }

  async findOne(id: number): Promise<{ data: CaseEntity; message: string }> {
    const CaseEntity = await this.caseRepo.findOne({
      where: { id: id },
      withDeleted: false,
    });
    if (!CaseEntity) {
      throw new BadRequestException(
        this.i18n.t('error.NOT_FOUND_IN_DATABASE', {
          args: { label: 'Case' },
        }),
      );
    }

    return {
      data: CaseEntity,
      message: this.i18n.t('messages.CASE_FETCHED'),
    };
  }

  async update(
    caseId: number,

    data: UpdateCaseDto,
  ): Promise<{ data: CaseEntity; message: string }> {
    const CaseEntity = await this.caseRepo.findOne({
      where: { id: caseId },

      withDeleted: false,
    });
    if (!CaseEntity) {
      throw new BadRequestException(
        this.i18n.t('error.NOT_FOUND_IN_DATABASE', {
          args: { label: 'Case' },
        }),
      );
    }

    const mappedCase = this.caseHelper.caseUpdate(CaseEntity, data);
    // if (documentPath) {
    //   mappedCase.documentPath = documentPath;
    // } else {
    //   mappedCase.documentPath = oldDocumentPath;
    // }

    const result = await this.caseRepo.save(mappedCase, {
      reload: true,
    });

    // if (oldDocumentPath && documentPath) {
    //   removeFile(oldDocumentPath);
    // }

    return {
      data: result,
      message: this.i18n.t('messages.CASE_UPDATED'),
    };
  }

  async remove(id: number): Promise<{ message: string }> {
    const CaseEntity = await this.caseRepo.findOne({
      where: { id: id },
      withDeleted: false,
    });
    if (!CaseEntity) {
      throw new BadRequestException(
        this.i18n.t('error.NOT_FOUND_IN_DATABASE', {
          args: { label: 'Case' },
        }),
      );
    }

    await this.caseRepo.softDelete({ id: id });

    return { message: this.i18n.t('message.CASE_DELETED') };
  }
}
