import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateCaseDto } from './dto/update-case.dto';
import { CaseEntity } from './entities/case.entity';
import { CaseHelper } from './case.helper';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { I18nService } from 'nestjs-i18n';
import { CasePagination } from './dto/fetch-all-pagination.dto';
import { CreateCaseDto } from './dto/create-case.dto';
import { CourtEntity } from '../court/entities/court.entity';

@Injectable()
export class CaseService {
  constructor(
    @InjectRepository(CaseEntity)
    private readonly caseRepo: Repository<CaseEntity>,
    @InjectRepository(CourtEntity)
    private readonly courtRepo: Repository<CourtEntity>,
    private readonly caseHelper: CaseHelper,
    private readonly i18n: I18nService,
  ) {}

  async create(createCaseDto: CreateCaseDto): Promise<{ data: CaseEntity; message: string }> {
    const baseCase = new CaseEntity();

    // Ensure court exists before assigning
    const court = await this.courtRepo.findOne({ where: { id: createCaseDto.court_id } });
    if (!court) {
      throw new BadRequestException(
        this.i18n.t('error.NOT_FOUND_IN_DATABASE', { args: { label: 'Court' } }),
      );
    }

    // Utilize helper function to map DTO to entity
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
      condition.case_title = ILike(`%${searchParams}%`);
    }

    const [result, total] = await this.caseRepo.findAndCount({
      where: condition,
      relations: ['court'], // To include related court information
      order: { case_date: 'DESC' },
      take,
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
    const caseEntity = await this.caseRepo.findOne({
      where: { id },
      relations: ['court'], // To include related court information
      withDeleted: false,
    });
    if (!caseEntity) {
      throw new BadRequestException(
        this.i18n.t('error.NOT_FOUND_IN_DATABASE', {
          args: { label: 'Case' },
        }),
      );
    }

    return {
      data: caseEntity,
      message: this.i18n.t('messages.CASE_FETCHED'),
    };
  }

  async update(
    caseId: number,
    data: UpdateCaseDto,
  ): Promise<{ data: CaseEntity; message: string }> {
    const caseEntity = await this.caseRepo.findOne({
      where: { id: caseId },
      withDeleted: false,
    });
    if (!caseEntity) {
      throw new BadRequestException(
        this.i18n.t('error.NOT_FOUND_IN_DATABASE', {
          args: { label: 'Case' },
        }),
      );
    }

    // Utilize helper function to map update DTO to entity
    const mappedCase = this.caseHelper.caseUpdate(caseEntity, data);

    const result = await this.caseRepo.save(mappedCase, { reload: true });

    return {
      data: result,
      message: this.i18n.t('messages.CASE_UPDATED'),
    };
  }

  async remove(id: number): Promise<{ message: string }> {
    const caseEntity = await this.caseRepo.findOne({
      where: { id },
      withDeleted: false,
    });
    if (!caseEntity) {
      throw new BadRequestException(
        this.i18n.t('error.NOT_FOUND_IN_DATABASE', {
          args: { label: 'Case' },
        }),
      );
    }

    await this.caseRepo.softDelete({ id });

    return { message: this.i18n.t('messages.CASE_DELETED') };
  }
}
