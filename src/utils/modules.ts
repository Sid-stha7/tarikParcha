import { MODULE_LIST } from "../constants/modules";
import { MODULE_PERMISSIONS } from "../constants/permissions";

//
import { MODULES } from "../constants/module.enum";
import { PERMISSIONS } from "../constants/permission.enum";

/**
 * Take array of module items and convert to a unified string which can be user later on to evaluate
 */
export function getAccessModuleString(moduleKeys: string[]) {
  let result = 0n;

  // Combining all modules
  for (const modKey of moduleKeys) {
    const key = MODULE_LIST.find((module) => module.key === modKey);
    if (!key) continue;

    result |= key.value;
  }

  // Combining to string
  return result.toString();
}

/**
 * Check if manufacturere has all the enough modules to perform specific actions
 */
export function checkHasModuleAccess(
  accessModules: bigint,
  permissionKeys: PERMISSIONS[],
): boolean {
  const requiredModules: MODULES[] = [];

  // Get array of modules from permissionKeys
  for (const permKey of permissionKeys) {
    const module = MODULE_PERMISSIONS.find(
      (permItem) => permItem.key === permKey,
    )?.module;
    if (!module) continue;

    //
    if (!requiredModules.includes(module)) {
      requiredModules.push(module);
    }
  }

  console.log(requiredModules);

  // Check if accessModules has every of them
  for (const moduleItem of requiredModules) {
    const module = MODULE_LIST.find((mode) => mode.key === moduleItem);
    if (!module) continue;

    console.log(module);

    //
    const hasPerm = !!(accessModules & module.value);
    if (!hasPerm) return false;
  }

  return true;
}
