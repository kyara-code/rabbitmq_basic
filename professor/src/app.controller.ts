import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMQService } from './rabbit-mq/rabbit-mq.service';

@Controller('sender')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  @Get('message')
  async getHello() {
    this.rabbitMQService.send('rabbit-mq-prof', {
      message: this.appService.getHello(),
    });
    return 'Message sent to the queue!';
  }
}