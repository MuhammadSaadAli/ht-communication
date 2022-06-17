export class CreateChatDto {
  id?: string;
  userId: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export class UpdateChatDto {
  id?: string;
  userId?: string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
