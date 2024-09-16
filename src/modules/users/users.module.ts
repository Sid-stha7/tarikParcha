import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
//
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { UsersController } from './users.controller';

//
import { RolesModule } from '../roles/roles.module';

//
// import { IsEmailAlreadyExistConstraint } from "../../validator/email.validator";
// import { IsUsernameAlreadyExistConstraint } from "../../validator/username.validator";
// import { IsEmailAlreadyExistUpdateConstraint } from "../../validator/user-update-email.validator";
// import { IsUsernameAlreadyExistUpdateConstraint } from "../../validator/username-update-email.validator";
//
import { UserHelper } from './helper/user.helper';

//
@Module({
  imports: [
    //
    EventEmitterModule.forRoot(),
    TypeOrmModule.forFeature([UserEntity]),

    forwardRef(() => RolesModule),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,

    //
    UserHelper,
    //
    // IsEmailAlreadyExistConstraint,
    // IsEmailAlreadyExistUpdateConstraint,
    // IsUsernameAlreadyExistConstraint,
    // IsUsernameAlreadyExistUpdateConstraint,
  ],
  exports: [UsersService],
})
export class UsersModule {}
