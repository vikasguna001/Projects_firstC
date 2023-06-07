import { Module } from '@nestjs/common';
import { DemoController } from './Demo.controller'

@Module({
    imports: [],
    controllers: [],
    providers: [],
})
export class DemoModule {
    constructor() {
        console.log("demo module");

    }
}
