import {
  IsNotEmpty,
  IsOptional,
  IsEmail,
  ValidateNested,
  IsMongoId,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

class Phone {
  @ApiProperty()
  @IsNotEmpty()
  number: string;

  @ApiProperty()
  @IsNotEmpty()
  code: string;
}
class PersonalInformation {
  @ApiPropertyOptional()
  @IsOptional()
  socialSecurityNumber: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsMongoId()
  fileId: string;
}

class EmergencyContact {
  @ApiPropertyOptional()
  @IsOptional()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  phone: string;

  @ApiPropertyOptional()
  @IsOptional()
  phoneCode: string;
}

export class CreateWorkerDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  nationality: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Phone)
  phone: Phone;

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PersonalInformation)
  personalInformation: PersonalInformation;

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => EmergencyContact)
  emergencyContact: EmergencyContact;

  @ApiPropertyOptional()
  @IsOptional()
  @IsMongoId()
  fileId: string;
}
