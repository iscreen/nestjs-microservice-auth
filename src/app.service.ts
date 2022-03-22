import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class AppService {

  private readonly users: any[] =
  [{
    userId: '123',
    stripeUserId: '8888123',
  }, {
    userId: '456',
    stripeUserId: '8888456',
  }];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(dto: GetUserDto) {
    return this.users.find((user) => user.userId === dto.userId);
  }
}
