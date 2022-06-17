import { Inject, Injectable } from '@nestjs/common';
import { HT_CHAT } from 'src/database/constants/constants';
import { HtChat } from 'src/database/model/ht-chat.model';
import { CreateChatDto, UpdateChatDto } from 'src/utils';

@Injectable()
export class ChatService {
  constructor(@Inject(HT_CHAT) private useRepository: typeof HtChat) {}

  async create(chat: CreateChatDto) {
    console.log(chat);
    return await this.useRepository.create(chat);
  }
  async updateType(id: string, chat: UpdateChatDto) {
    chat.updatedAt = new Date();
    return await this.useRepository.update(chat, { where: { id } });
  }

  async delete(id: string) {
    return await this.useRepository.destroy({
      where: {
        id: id,
      },
    });
  }
  async getById(id: string) {
    return await this.useRepository.findOne({
      where: {
        id,
      },
    });
  }
  async find(filters: CreateChatDto) {
    // console.log('filter', filters)
    let where: any = filters;

    return await this.useRepository.findAll({ where });
  }
}
