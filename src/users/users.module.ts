import {forwardRef, Module} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {RolesModule} from "../roles/roles.module";
import { AuthModule } from 'src/auth/auth.module';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User, Role, UserRoles]), // Регистрируем созданные классы модели из users.model.ts и roles.model.ts
      RolesModule,
      forwardRef(() => AuthModule),
  ],
   exports: [
        UsersService,
    ]
})
export class UsersModule {}