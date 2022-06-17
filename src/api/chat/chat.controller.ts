import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateChatDto, UpdateChatDto } from 'src/utils';

import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}
  @Post()
  async create(@Body() chat: CreateChatDto) {
    try {
      const created = await this.chatService.create(chat);

      return {
        isSuccess: true,
        message: 'Successfully created',
        data: created,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }
  @Get()
  async findAll(@Query() filters: any = {}) {
    try {
      const data = await this.chatService.find(filters);
      if (data.length === 0) {
        throw new HttpException(
          { message: ' Data not found' },
          HttpStatus.BAD_REQUEST,
        );
      }
      return {
        isSuccess: true,
        message: 'Successfully created',
        data: data,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() chat: UpdateChatDto) {
    try {
      const getById = await this.getById(id);
      console.log('GetByID ', getById);
      if (!getById) {
        throw new HttpException(
          { message: 'Id is not correct' },
          HttpStatus.BAD_REQUEST,
        );
      }

      const updated = await this.chatService.updateType(id, chat);
      return {
        isSuccess: true,
        message: 'Successfully created',
        data: updated,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    try {
      const getById = await this.getById(id);
      console.log('GetByID ', getById);
      if (!getById) {
        throw new HttpException(
          { message: 'Id is not correct' },
          HttpStatus.BAD_REQUEST,
        );
      }

      const deleted = await this.chatService.delete(id);
      return {
        isSuccess: true,
        message: 'Successfully Deleted',
        data: deleted,
      };
    } catch (error) {
      return {
        message: error.response ?? 'Something went wrong',
        statusCode: error.status ?? 400,
        isSuccess: false,
      };
    }
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.chatService.getById(id);
  }
}
