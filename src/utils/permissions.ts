import {
  COMPLETE_PERMISSIONS,
  MODULE_PERMISSIONS,
} from "../constants/permissions";

//
import { PERMISSIONS } from "../constants/permission.enum";

/**
 * Take array of permission items and convert to a unified string which can be user later on to evaluate
 */
export function getPermissionString(permissionKeys: string[]) {
  let result = 0n;

  // Combining all permissions
  for (const permKey of permissionKeys) {
    const key = MODULE_PERMISSIONS.find((module) => module.key === permKey);
    if (!key) continue;

    result |= key.permission;
  }

  // Combining to string
  return result.toString();
}

/**
 * Check if user has all the enough permissions required to use an API route
 */
export function checkHasPermissions(
  permissions: bigint,
  permissionKeys: PERMISSIONS[],
): boolean {
  // Checking if every permission is available
  for (const permKey of permissionKeys) {
    const key = MODULE_PERMISSIONS.find((module) => module.key === permKey);
    if (!key) return false;

    //
    const hasPerm = !!(permissions & key.permission);
    if (!hasPerm) return false;
  }

  return true;
}
