import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

import type { Request } from "express";

/**
 * Should be used with caution.
 *
 * Also should be used only in the routes which have /:sellerId defined !!!
 */
@Injectable()
export class IsManufactureGuard implements CanActivate {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    //
    const user = request.user;
    if (!user) return false;

    //
    const manufactureId =
      request.params?.manufactureId ?? request.body?.manufactureId;

    //

    return !!manufactureId;
  }
}
