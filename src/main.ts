import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'


async function start() {

    const PORT = process.env.PORT || 5000

    // Создаем приложение c нужным модулем
    const app = await NestFactory.create(AppModule) 

    // Запускаем сервер
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}


start()