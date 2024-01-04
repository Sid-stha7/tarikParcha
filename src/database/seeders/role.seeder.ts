import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";

//
import { AuthRoleEntity } from "../../modules/roles/entities/role.entity";

//
import { getPermissionString } from "../../utils/permissions";
import { COMPLETE_PERMISSIONS } from "../../constants/permissions";

//
export default class GodRoleSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const repository = dataSource.getRepository(AuthRoleEntity);

    // //
    // await repository.insert([
    //   {
    //     label: "Super Admin",
    //     accessPermissions: getPermissionString(COMPLETE_PERMISSIONS),
    //   },
    // ]);
  }
}
