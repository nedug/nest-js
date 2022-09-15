import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from './pipe/validation.pipe';


async function start() {

    const PORT = process.env.PORT || 5001;

    // Создаем приложение c нужным модулем
    const app = await NestFactory.create(AppModule);

    // Создаем документацию приложения и REST API
    const config = new DocumentBuilder()
        .setTitle('BACKEND Nest.js')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .addTag('Sasha')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    app.useGlobalPipes(new ValidationPipe());

    // Запускаем сервер
    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}


start();