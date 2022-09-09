import { NestFactory } from '@nestjs/core'


async function start() {

    const PORT = process.env.PORT || 5000

    // Создаем приложение
    const app = await NestFactory.create() 

    // Запускаем сервер
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}


start()