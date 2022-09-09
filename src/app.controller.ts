import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";


// Контроллеры отвечают за обработку входящих запросов и возврат ответов клиенту


@Controller('/api') // Указываем адрес запроса (можно тут не указывать)
export class AppController {

    constructor(private appService: AppService) {} // Испрользуем наш провайдер
    
    @Get('/users') // Указываем Декоратор метода HTTP
    getUsers() {
        return this.appService.getUsers()
    }
}