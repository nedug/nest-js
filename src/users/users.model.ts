import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";


interface UserCreationAttrs { // Опишем поля которые нужны для создания объектов User
    email: string
    password: string
}


@Table({tableName: 'users'}) // Декторатор для того чтобы этот класс стал таблицей в базе данных с именем "users"
export class User extends Model<User, UserCreationAttrs> {
    
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'}) // Декоратор для Swagger
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})  // Декоратор, чтобы эти поля стали колонками в таблице. Указываем тип, уникальность, и тд.
    id: number;

    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'}) // Декоратор для Swagger
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '12345678', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Забанен или нет'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'За хулиганство', description: 'Причина блокировки'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles) // Связываем роли с пользователями
    roles: Role[];
}