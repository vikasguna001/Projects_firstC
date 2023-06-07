import { Module } from '@nestjs/common';
import { DemoModule } from './Demo.module'
import { UserModule } from './user/user.module';
import { DemoController } from './Demo.controller';
import { DemoService } from './Demo.service';

@Module({
  imports: [DemoModule, UserModule],
  controllers: [DemoController],
  providers: [DemoService],
})
export class AppModule { }
