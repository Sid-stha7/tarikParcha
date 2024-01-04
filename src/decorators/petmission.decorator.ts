import { SetMetadata } from "@nestjs/common";

//
import { PERMISSIONS } from "../constants/permission.enum";

//
export const PERMISSION_KEY = "permissions";

//
export const AccessPermissions = (...permission: PERMISSIONS[]) =>
  SetMetadata(PERMISSION_KEY, permission);
