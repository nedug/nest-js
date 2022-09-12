import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import { Role } from 'src/roles/roles.model';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role]), // Регистрируем созданные классы модели из users.model.ts и roles.model.ts
  ],
})
export class UsersModule {}
