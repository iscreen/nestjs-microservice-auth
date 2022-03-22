import { Controller, Get } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { IncomingMessage } from 'http';
import { AppService } from './app.service';
import { GetUserDto } from './dto/get-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('get_user')
  getUser(@Payload('value') dto: GetUserDto) {
    return this.appService.getUser(dto);
  }

  //@MessagePattern('get_user')
  // getUser(data: any) {
  //   return this.appService.getUser(data.value);
  // }
}
