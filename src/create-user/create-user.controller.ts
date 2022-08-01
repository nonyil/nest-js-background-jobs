import { Body, Controller, Post } from '@nestjs/common';
import { SendEmailProducerServicer } from 'src/jobs/sendEmailProducer.service';
import { CreateUserDto } from './create-user-dto';

@Controller('create-user')
export class CreateUserController {
  constructor(private sendMailService: SendEmailProducerServicer) {}
  @Post('/')
  async createUser(@Body() createUser: CreateUserDto) {
    await this.sendMailService.sendMail(createUser);
    return createUser;
  }
}
