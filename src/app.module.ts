import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';


// Декоратор @Module()предоставляет метаданные, которые Nest использует для организации структуры приложения.
// Декоратор, который дает классу или функции доп. функциональность
@Module({
    controllers: [], // Контроллеры отвечают за обработку входящих запросов и возврат ответов клиенту

    providers: [], // Контроллеры должны обрабатывать HTTP-запросы и делегировать Провайдерам более сложные задачи
   
    imports: [ // Импортируем другие модули (к примеру базу данных)
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'canekk7',
            database: 'base-Ulbi',
            models: [],
            autoLoadModels: true, // Для автоматического создания таблиц на основании моделей
          }), 

          UsersModule, // Автоматически добавляетя при созднии модуля через Nest
        ]
})
export class AppModule {


}