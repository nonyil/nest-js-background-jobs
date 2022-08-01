import { MailerService } from '@nestjs-modules/mailer';
import { CreateUserDto } from 'src/create-user/create-user-dto';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { log } from 'console';

@Processor('sendMail-queue')
class SendMailConsumer {
  constructor(private mailService: MailerService) {}

  @Process('sendMail-job')
  async sendMailJob(job: Job<CreateUserDto>) {
    const { data } = job;
    log(data);

    await this.mailService.sendMail({
      to: data.email,
      from: 'Equipe Nony<NexTLife@gmail.com>',
      subject: 'Welcome to the Nony team',
      text: `Welcome to the Nony team, ${data.name}!`,
    });
  }
}

export { SendMailConsumer };
