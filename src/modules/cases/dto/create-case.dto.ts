import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDate,
} from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';
import { ManyToOne, OneToMany } from 'typeorm';
import { CaseEntity } from '../entities/case.entity';

export class CreateCaseDto {
  @ApiProperty({
    description: 'Serial Number',
    type: Number,
    example: 1,
  })
  @IsInt({ message: i18nValidationMessage('validation.MUST_BE_INT') })
  serial_number: number;

  @ApiProperty({
    description: 'Location',
    type: String,
    example: 'Some Location',
  })
  @IsString({ message: i18nValidationMessage('validation.MUST_BE_STRING') })
  location: string;

  @ApiProperty({
    description: 'Registration Date',
    type: Date,
    example: '2022-01-01T00:00:00.000Z',
  })
  @IsDate({ message: i18nValidationMessage('validation.MUST_BE_DATE') })
  registration_date: Date;

  @ApiProperty({
    description: 'Issue',
    type: String,
    example: 'Some issue',
  })
  @IsString({ message: i18nValidationMessage('validation.MUST_BE_STRING') })
  issue: string;

  @ApiProperty({
    description: 'Issue Number',
    type: String,
    example: 'ISS-001',
  })
  @IsString({ message: i18nValidationMessage('validation.MUST_BE_STRING') })
  issue_number: string;

  @ApiProperty({
    description: 'Party Opposition',
    type: String,
    example: 'Some party',
  })
  @IsString({ message: i18nValidationMessage('validation.MUST_BE_STRING') })
  party_opposition: string;

  @ApiProperty({
    description: 'Code Number',
    type: String,
    example: 'CODE-001',
  })
  @IsString({ message: i18nValidationMessage('validation.MUST_BE_STRING') })
  code_number: string;

  @ApiProperty({
    description: 'Indication',
    type: String,
    example: 'Some indication',
  })
  @IsString({ message: i18nValidationMessage('validation.MUST_BE_STRING') })
  indication: string;

  @ApiProperty({
    description: "Attorney's View",
    type: String,
    example: "Attorney's view",
  })
  @IsString({ message: i18nValidationMessage('validation.MUST_BE_STRING') })
  attorneys_view: string;

  @ApiProperty({
    description: 'Details',
    type: String,
    example: 'Some details',
  })
  @IsString({ message: i18nValidationMessage('validation.MUST_BE_STRING') })
  details: string;

  // @ApiProperty({
  //   description: 'Is Verified',
  //   type: Boolean,
  //   example: true,
  // })
  // @IsBoolean({ message: i18nValidationMessage('validation.MUST_BE_BOOLEAN') })
  // @IsOptional()
  // isverified?: boolean;

  // @ApiProperty({
  //   description: 'Role ID',
  //   type: Number,
  //   example: 1,
  // })
  // @IsInt({ message: i18nValidationMessage('validation.MUST_BE_INT') })
  // @IsOptional()
  // roleId?: number;

  @ApiProperty({
    description: 'User ID',
    type: Number,
    example: 1,
  })
  @IsInt({ message: i18nValidationMessage('validation.MUST_BE_INT') })
  @IsOptional()
  userId?: number;
}
