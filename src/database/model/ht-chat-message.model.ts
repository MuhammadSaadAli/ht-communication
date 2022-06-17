import { Model, Table } from 'sequelize-typescript';

enum Estatus {
  'read',
  'unread',
}
export interface IhtChatMessage {
  id: string;
  chatId: string;
  userId: string;
  message: string;
  status: Estatus;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  // `id` char(36) NOT NULL DEFAULT (uuid()),
  // `chatId` char(36) DEFAULT NULL,
  // `userId` char(36) DEFAULT NULL,
  // `message` text,
  // `status` enum('read','unread') DEFAULT NULL,
  // `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  // `updatedAt` datetime DEFAULT NULL,
  // `deletedAt` datetime DEFAULT NULL,
}

@Table({ tableName: 'ht_chat_message', underscored: false, timestamps: false })
export class HtChatMessage extends Model<IhtChatMessage> {
  id: string;
  chatId: string;
  userId: string;
  message: string;
  status: Estatus;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
