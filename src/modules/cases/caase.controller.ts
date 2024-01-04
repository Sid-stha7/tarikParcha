import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  Query,
  Req,
} from '@nestjs/common';

import { UpdateCaseDto } from './dto/update-case.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreateCaseSerializer } from './serializer/create-case.serializer';
import { FileInterceptor } from '@nestjs/platform-express';
import { ErrorResponse } from 'src/ResponseDocs/ErrorResponse';
import { imageUploadFilter, multerDiskStorage } from 'src/utils/file-upload';
import { plainToClass } from 'class-transformer';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

import { CasePagination } from './dto/fetch-all-pagination.dto';

import { Request } from 'express';

import { PERMISSIONS } from 'src/constants/permission.enum';

import { UpdateCaseSerializer } from './serializer/update-case.serializer';
import { DeletedCaseSerializer } from './serializer/delete-case.serializer';
import { FetchALlCasesSerializer } from './serializer/fetchAll-case.serializer';
import { FetchSingleCaseSerializer } from './serializer/fetch-singel-case.serializer';
import { CaseService } from './caase.service';
import { CreateCaseDto } from './dto/create-case.dto';

@ApiTags('Cases')
@ApiBearerAuth()
@ApiSecurity('access-token')
@UseGuards(JwtAuthGuard)
@Controller('cases')
export class CaseController {
  constructor(private readonly caseService: CaseService) {}

  @Post()
  //   @AccessPermissions(PERMISSIONS.CASE_CREATE)
  @ApiCreatedResponse({
    status: 201,
    description: 'Case Created',
    type: CreateCaseSerializer,
  })
  @ApiBadRequestResponse({
    description: 'Unable to add',
    type: ErrorResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized Access',
    type: ErrorResponse,
  })
  @ApiParam({
    name: 'userId',
    type: 'number',
    required: true,
    description: 'User ID',
  })
  async create(
    @Req() request: Request,
    @Body() createCaseDto: CreateCaseDto,
  ): Promise<CreateCaseSerializer> {
    return plainToClass(
      CreateCaseSerializer,
      await this.caseService.create(createCaseDto),
      { strategy: 'excludeAll' },
    );
  }

  @Get('/:id')
  //   @AccessPermissions(PERMISSIONS.CASE_READ)
  @ApiOkResponse({
    description: 'Case details',
    type: FetchSingleCaseSerializer,
  })
  @ApiBadRequestResponse({
    description: 'Unable to Fetch',
    type: ErrorResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized Access',
    type: ErrorResponse,
  })
  @ApiParam({
    name: 'manufacturerId',
    type: 'number',
    required: true,
    description: 'Manufacturer ID',
  })
  async findOne(
    @Param('id') id: number,
    @Req() req: Request,
  ): Promise<FetchALlCasesSerializer> {
    return plainToClass(
      FetchALlCasesSerializer,
      await this.caseService.findOne(id),
      { strategy: 'excludeAll' },
    );
  }

  @Patch('/:id')

  //   @AccessPermissions(PERMISSIONS.CASE_READ, PERMISSIONS.CASE_UPDATE)
  @ApiOkResponse({
    description: 'Case updated',
    type: UpdateCaseSerializer,
  })
  @ApiBadRequestResponse({
    description: 'Unable to update',
    type: ErrorResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized Access',
    type: ErrorResponse,
  })
  @UseInterceptors(
    FileInterceptor('caseDocument', {
      fileFilter: imageUploadFilter,
      storage: multerDiskStorage,
    }),
  )
  async update(
    @Param('id') id: number,
    @Req() req: Request,
    @Body() updateCaseDto: UpdateCaseDto,
  ): Promise<UpdateCaseSerializer> {
    return plainToClass(
      UpdateCaseSerializer,
      await this.caseService.update(
        id,

        updateCaseDto,
      ),
      { strategy: 'excludeAll' },
    );
  }

  @Delete(':id')
  //   @AccessPermissions(PERMISSIONS.CASE_READ, PERMISSIONS.CASE_DELETE)
  @ApiOkResponse({
    description: 'Soft Delete Case',
    type: DeletedCaseSerializer,
  })
  @ApiBadRequestResponse({
    description: 'Unable to delete',
    type: ErrorResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized Access',
    type: ErrorResponse,
  })
  @ApiParam({
    name: 'manufacturerId',
    type: 'number',
    required: true,
    description: 'Manufacturer ID',
  })
  async remove(
    @Param('id') id: number,
    @Req() req: Request,
  ): Promise<DeletedCaseSerializer> {
    return plainToClass(
      DeletedCaseSerializer,
      await this.caseService.remove(+id),
      { strategy: 'excludeAll' },
    );
  }
}
