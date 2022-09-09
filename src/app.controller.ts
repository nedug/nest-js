import { Controller, Get } from "@nestjs/common";


// Контроллеры отвечают за обработку входящих запросов и возврат ответов клиенту


@Controller('/api') // Указываем адрес запроса (можно тут не указывать)
export class AppController {
    
    @Get('/users') // Указываем Декоратор метода HTTP
    getUsers() {
        return [{id: 1, name: 'Sasha'}]
    }
}