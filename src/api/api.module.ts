import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { ChatMessageModule } from './chat-message/chat-message.module';

@Module({
  imports: [ChatModule, ChatMessageModule],
})
export class ApiModule {}
