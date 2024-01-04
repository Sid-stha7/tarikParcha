import argon from "argon2";
import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";

//
import { AuthRoleEntity } from "../../modules/roles/entities/role.entity";
import { UserEntity, UserType } from "../../modules/users/entities/user.entity";

//
export default class PlatformAdminSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    // Role
    const roleRepo = dataSource.getRepository(AuthRoleEntity);
    const godRole = await roleRepo.findOne({ where: { label: "Super Admin" } });

    //
    const pass = await argon.hash("Password@123");

    // User
    const userRepo = dataSource.getRepository(UserEntity);
    // await userRepo.save([
    //   {
    //     firstName: "John",
    //     lastName: "Doe",
    //     username: "john.doe",
    //     phone: "9841223344",
    //     email: "admin@dravya.com",
    //     password: pass,
    //     type: UserType.PLATFORM,
    //     roleId: godRole.id,
    //   },
    // ]);
  }
}
