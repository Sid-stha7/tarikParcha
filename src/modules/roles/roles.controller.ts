import { plainToClass } from 'class-transformer';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Param,
  Get,
  Delete,
  Patch,
  Query,
  Req,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiParam,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

//
import type { Request } from 'express';

//
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PaginationRoleQuery } from './dto/pagination.dto';

//
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

//
import { RolesService } from './roles.service';
import { PERMISSIONS } from 'src/constants/permission.enum';
import { ErrorResponse } from 'src/ResponseDocs/ErrorResponse';
import { AccessPermissions } from 'src/decorators/petmission.decorator';

//
import { SingleRoleSerializer } from './serializer/role.serializer';
import { UpdateRoleSerializer } from './serializer/role-update.serializer';
import { DeleteRoleSerializer } from './serializer/role-deleted.serializer';

//
@UseGuards(JwtAuthGuard)
@ApiSecurity('access-token')
@Controller('')
@ApiBadRequestResponse({
  description: 'Unable to add',
  type: ErrorResponse,
})
@ApiUnauthorizedResponse({
  description: 'Unauthorize Access',
  type: ErrorResponse,
})
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  /**
   * Create a new role for the platform
   */
  @ApiTags(' Roles')
  @Post('/roles')
  @AccessPermissions(PERMISSIONS.PLATFORM_ROLE_CREATE)
  async createNewPlatformRole(@Body() roleData: CreateRoleDto) {
    const response = await this.rolesService.create(roleData);

    return {
      data: response,
      message: 'Successfully created new role for platform',
    };
  }

  /**
   * Get paginated list of Roles
   */
  @ApiTags('Roles')
  @Get('/roles')
  @AccessPermissions(PERMISSIONS.PLATFORM_ROLE_READ)
  async fetchAll(@Query() query: PaginationRoleQuery) {
    const [platformRoles, count] = await this.rolesService.findMany({
      ...query,
      manufacturerId: null,
    });

    //
    return {
      message: '',
      data: platformRoles,
      pagination: {
        total: count,
      },
    };
  }

  /*
   ** get Roles
   */
  @ApiTags('Roles')
  @AccessPermissions(PERMISSIONS.ROLES_READ)
  @Get('/manufacturers/platform-roles')
  @ApiBadRequestResponse({
    description: 'Unable to fetch',
    type: ErrorResponse,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorize Access',
    type: ErrorResponse,
  })
  async fetchAllPlatformRoleSelect(@Req() request: Request) {
    //
    const roles = await this.rolesService.selectRolePlatform();

    //
    return {
      message: '',
      data: roles.data,
    };
  }

  /**
   * Get single platform role details
   */
  @ApiTags('Roles')
  @Get('/roles/:roleId')
  @AccessPermissions(PERMISSIONS.PLATFORM_ROLE_READ)
  async fetchPlatformRoleDetails(@Param('roleId') roleId: number) {
    const roleDetails = await this.rolesService.findRoleById(roleId);

    //
    return {
      message: '',
      data: roleDetails,
    };
  }

  /**
   * Update platform role
   */
  @ApiTags('Roles')
  @Patch('/roles/:roleId')
  @AccessPermissions(
    PERMISSIONS.PLATFORM_ROLE_READ,
    PERMISSIONS.PLATFORM_ROLE_UPDATE,
  )
  async updatePlatformRole(
    @Param('roleId') roleId: number,
    @Body() data: UpdateRoleDto,
  ) {
    const roleDetails = await this.rolesService.update(roleId, data);

    //
    return {
      message: '',
      data: roleDetails,
    };
  }

  /**
   * Delete platform role
   */
  @ApiTags('Roles')
  @Delete('/roles/:roleId')
  @AccessPermissions(
    PERMISSIONS.PLATFORM_ROLE_READ,
    PERMISSIONS.PLATFORM_ROLE_DELETE,
  )
  async deletePlatformRole(@Param('roleId') roleId: number) {
    await this.rolesService.deleteRole(roleId);

    return {
      message: '',
    };
  }
}
