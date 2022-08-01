import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user-dto';

@Controller('create-user')
export class CreateUserController {
  constructor(private mailService: MailerService) {}
  @Post('/')
  async createUser(@Body() createUser: CreateUserDto) {
    await this.mailService.sendMail({
      to: createUser.email,
      from: 'Nony Change Your Life <NexTLife@gmail.com>',
      subject: 'Welcome to Nony',
      text: `Welcome to Nony, ${createUser.name}!`,
    });
    return createUser;
  }
}
