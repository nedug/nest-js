import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";


// Декоратор @Module()предоставляет метаданные, которые Nest использует для организации структуры приложения.
// Декоратор, который дает классу или функции доп. функциональность
@Module({
    controllers: [AppController], // Контроллеры отвечают за обработку входящих запросов и возврат ответов клиенту
    providers: [AppService], // Контроллеры должны обрабатывать HTTP-запросы и делегировать Провайдерам более сложные задачи

})
export class AppModule {


}