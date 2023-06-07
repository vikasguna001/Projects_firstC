import { Module } from '@nestjs/common';

@Module({})
export class UserModule {
    constructor(){
        console.log("user module");
        
    }
}
