import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import { User } from 'src/users/users.model';
import { UserRoles } from './user-roles.model';


@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles]), // Регистрируем созданные классы модели из users.model.ts и roles.model.ts
  ],
})
export class RolesModule {}
