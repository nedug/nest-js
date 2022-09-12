import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";


interface UserCreationAttrs { // Опишем поля которые нужны для создания объектов User
    email: string
    password: string
}


@Table({tableName: 'users'}) // Декторатор для того чтобы этот класс стал таблицей в базе данных с именем "users"
export class User extends Model<User, UserCreationAttrs> {
    
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    // Декоратор, чтобы эти поля стали колонками в таблице. Указываем тип, уникальность, и тд.
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;


}