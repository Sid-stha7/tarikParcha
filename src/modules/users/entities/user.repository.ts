import { dataSource } from "src/database/data-source";
import { UserEntity } from "./user.entity";

export const userRepository = dataSource.getRepository(UserEntity);
