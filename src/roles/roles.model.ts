import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";


interface RoleCreationAttrs { // Опишем поля которые нужны для создания объектов User
    value: string
    description: string
}


@Table({tableName: 'roles'}) // Декторатор для того чтобы этот класс стал таблицей в базе данных с именем "roles"
export class Role extends Model<Role, RoleCreationAttrs> {
    
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'}) // Декоратор для Swagger
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})  // Декоратор, чтобы эти поля стали колонками в таблице. Указываем тип, уникальность, и тд.
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Уникальное значение роли'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles) // Связываем роли с пользователями
    users: User[];
}