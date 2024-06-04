import { Controller, Get } from '@nestjs/common';
import {
  MessagePattern,
  RmqContext,
  Ctx,
  Payload
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller('receiver')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('rabbit-mq-prof')
  @Get('message')
  async execute(
    @Payload() data: any,
    @Ctx() context: RmqContext
  ) {
    const channel = context.getChannelRef();
    const orginalMessage = context.getMessage();
    console.log('data', data);
    channel.ack(orginalMessage);
  }
}