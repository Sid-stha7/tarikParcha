import { Injectable } from "@nestjs/common";
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { UsersService } from "src/modules/users/users.service";

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUsernameAlreadyExistConstraint
  implements ValidatorConstraintInterface
{
  constructor(protected userService: UsersService) {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async validate(userName: any) {
    try {
      const user = await this.userService.validationWithUsername(userName);

      if (user) return false;

      return true;
    } catch (err) {
      return false;
    }
  }
}

export function IsUsernameAlreadyExist(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUsernameAlreadyExistConstraint,
    });
  };
}
