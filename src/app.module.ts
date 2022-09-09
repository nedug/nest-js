import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";


// Декоратор, который дает классу или функции доп. функциональность
@Module({
    controllers: [AppController]


})
export class AppModule {


}