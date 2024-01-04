import { Injectable } from "@nestjs/common";
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { UsersService } from "src/modules/users/users.service";

@ValidatorConstraint({ async: true })
@Injectable()
export class IsEmailAlreadyExistUpdateConstraint
  implements ValidatorConstraintInterface
{
  constructor(protected validationService: UsersService) {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async validate(email: any, args: ValidationArguments) {
    try {
      const [id] = args.constraints;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const userId = (args.object as any)[id];

      const user = await this.validationService.validationWitEmail(email);

      if (user && user.id != Number(userId)) return false;
      return true;
    } catch (err) {
      return false;
    }
  }
}

export function IsUserEmailAlreadyExistUpdate(
  property: string,
  validationOptions?: ValidationOptions,
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: IsEmailAlreadyExistUpdateConstraint,
    });
  };
}
