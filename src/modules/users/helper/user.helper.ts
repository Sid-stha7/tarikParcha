import { Injectable } from "@nestjs/common";
import {
  UserEntity,
  UserStatusType,
  UserType,
} from "src/modules/users/entities/user.entity";
import { InsertUserDto } from "../dto/insert-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UpdateMeDTO } from "../dto/update-me.dto";

@Injectable()
export class UserHelper {
  createNewUser(user: UserEntity, userDetails: InsertUserDto) {
    if (userDetails.firstName) {
      user.firstName = userDetails.firstName;
    }
    if (userDetails.lastName) {
      user.lastName = userDetails.lastName;
    }
    if (userDetails.email) {
      user.email = userDetails.email;
    }
    if (userDetails.middleName) {
      user.middleName = userDetails.middleName;
    }
    if (userDetails.phone) {
      user.phone = userDetails.phone;
    }
    if (userDetails.telephone) {
      user.telephone = userDetails.telephone;
    }
    if (userDetails.username) {
      user.username = userDetails.username;
    }

    
    
    return user;
  }
  updateUser(user: UserEntity, userDetails: UpdateUserDto) {
    if (userDetails.firstName) {
      user.firstName = userDetails.firstName;
    }
    if (userDetails.lastName) {
      user.lastName = userDetails.lastName;
    }
    if (userDetails.email) {
      user.email = userDetails.email;
    }
    if (userDetails.middleName) {
      user.middleName = userDetails.middleName;
    }
    if (userDetails.phone) {
      user.phone = userDetails.phone;
    }
    if (userDetails.telephone) {
      user.telephone = userDetails.telephone;
    }
    if (userDetails.username) {
      user.username = userDetails.username;
    }

    // if (userDetails.status === true || userDetails.status === false) {
    //   user.status =
    //     userDetails.status === true
    //       ? UserStatusType.ACTIVE
    //       : UserStatusType.INACTIVE;
    // }

    return user;
  }
  updateMeUser(user: UserEntity, userDetails: UpdateMeDTO) {
    if (userDetails.firstName) {
      user.firstName = userDetails.firstName;
    }
    if (userDetails.lastName) {
      user.lastName = userDetails.lastName;
    }
    // if (userDetails.email) {
    //   user.email = userDetails.email;
    // }
    if (userDetails.middleName) {
      user.middleName = userDetails.middleName;
    }
    if (userDetails.phone) {
      user.phone = userDetails.phone;
    }
    if (userDetails.telephone) {
      user.telephone = userDetails.telephone;
    }
    if (userDetails.username) {
      user.username = userDetails.username;
    }

    return user;
  }
}
