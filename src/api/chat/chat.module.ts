import { Module } from '@nestjs/common';
import { providers } from 'src/database/providers/providers';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
  controllers: [ChatController],
  providers: [ChatService, ...providers],
})
export class ChatModule {}
