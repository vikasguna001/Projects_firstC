import { Controller, Post, Get, Put, Delete, Param } from "@nestjs/common";
import { DemoService } from "./Demo.service";

@Controller("demo")
export class DemoController {

    constructor(private demoservice: DemoService) {

    }

    @Post("/add")
    addDemo(): string {
        return this.demoservice.addDemo();
    }

    @Get("/get")
    findAllDemo(): string {
        return this.demoservice.getAllDemo();
    }

    @Put("/update")
    updateDemo(): string {
        return this.demoservice.updateDemo();
    }

    @Delete("/delete")
    deleteAllDemo(): string {
        return this.demoservice.deleteDemo();
    }

    @Get("/get/:id")
    findOneDemo(@Param() params): string {
        console.log(params.id);
        return this.demoservice.getOneDemo();
    }
}