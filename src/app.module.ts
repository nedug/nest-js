import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { Role } from "./roles/roles.model";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';


// Декоратор @Module()предоставляет метаданные, которые Nest использует для организации структуры приложения.
// Декоратор, который дает классу или функции доп. функциональность
@Module({
    controllers: [], // Контроллеры отвечают за обработку входящих запросов и возврат ответов клиенту

    providers: [], // Контроллеры должны обрабатывать HTTP-запросы и делегировать Провайдерам более сложные задачи
   
    imports: [ // Импортируем другие модули (к примеру базу данных)

        ConfigModule.forRoot({ // Работа с файлом .env
           envFilePath: `.${process.env.NODE_ENV}.env`, // устанавливаем доп. пакет 'cross-env' для работы с разными файлами .env
        }),

        ServeStaticModule.forRoot({
            rootPath: path.resolve( __dirname, 'static'),
        }),

        SequelizeModule.forRoot({ // Подключение к базе данных
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            models: [User, Role, UserRoles, Post], // Регистрируем созданные классы модели из users.model.ts
            autoLoadModels: true, // Для автоматического создания таблиц на основании моделей
          }), 

          UsersModule, // Автоматически добавляетя при созднии модуля через Nest
          RolesModule, AuthModule, PostsModule, FilesModule, 
        ]
})
export class AppModule {


}