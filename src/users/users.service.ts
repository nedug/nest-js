import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/create-user.dto";


@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {} // !!! уточнить

    async createUser(dto: CreateUserDto) { // На вход какой то объект (Data Transfer Object)
        const user = await this.userRepository.create(dto); // Создаем пользователя
        return user; // Возвращаем пользователя
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll(); // Находим всех пользователей
        return users;
    }

}