import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export class CreateCaseDto {
  @ApiProperty({
    description: 'Case Number',
    type: Number,
    example: 12345,
  })
  @IsInt({ message: i18nValidationMessage('validation.MUST_BE_INT') })
  @IsNotEmpty({ message: i18nValidationMessage('validation.REQUIRED') })
  case_number: number;

  @ApiProperty({
    description: 'Case Type',
    type: String,
    example: 'civil',
  })
  @IsString({ message: i18nValidationMessage('validation.MUST_BE_STRING') })
  @IsNotEmpty({ message: i18nValidationMessage('validation.REQUIRED') })
  case_type: string; // e.g., civil, criminal, tax

  @ApiProperty({
    description: 'Case Title',
    type: String,
    example: 'State vs John Doe',
  })
  @IsString({ message: i18nValidationMessage('validation.MUST_BE_STRING') })
  @IsNotEmpty({ message: i18nValidationMessage('validation.REQUIRED') })
  case_title: string;

  @ApiProperty({
    description: 'Case Date',
    type: Date,
    example: '2023-01-01T00:00:00.000Z',
  })
  @IsDate({ message: i18nValidationMessage('validation.MUST_BE_DATE') })
  case_date: Date;

  @ApiProperty({
    description: 'Court ID',
    type: Number,
    example: 1,
  })
  // @IsUUID('4', { message: i18nValidationMessage('validation.MUST_BE_UUID') })
  @IsNotEmpty({ message: i18nValidationMessage('validation.REQUIRED') })
  court_id: number;

  @ApiProperty({
    description: 'Judge ID',
    type: String,
    example: 'uuid',
  })
  @IsUUID('4', { message: i18nValidationMessage('validation.MUST_BE_UUID') })
  @IsOptional()
  judge_id?: string;

  @ApiProperty({
    description: 'Case Status',
    type: String,
    example: 'opened',
  })
  @IsEnum(['opened', 'closed', 'inactive'], {
    message: i18nValidationMessage('validation.INVALID_ENUM'),
  })
  case_status: string;

  @ApiProperty({
    description: 'Remarks',
    type: String,
    example: 'Additional case notes',
  })
  @IsString({ message: i18nValidationMessage('validation.MUST_BE_STRING') })
  @IsOptional()
  remarks?: string;

  @ApiProperty({
    description: 'Hearings',
    type: [String],
    example: ['uuid1', 'uuid2'],
  })
  @IsArray({ message: i18nValidationMessage('validation.MUST_BE_ARRAY') })
  @IsUUID('4', { each: true, message: i18nValidationMessage('validation.MUST_BE_UUID') })
  @IsOptional()
  hearings?: string[];
}
