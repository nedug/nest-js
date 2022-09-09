import { Injectable } from "@nestjs/common";


// Контроллеры должны обрабатывать HTTP-запросы и делегировать Провайдерам более сложные задачи


@Injectable()
export class AppService {
    
    getUsers() {
        return [{id: 1, name: 'Sasha'}]
    }
}