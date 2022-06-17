import { Model, Table, Column, DataType } from 'sequelize-typescript';

export interface IhtChat {
  id: string;
  userId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

@Table({ tableName: 'ht_chat', underscored: false, timestamps: false })
export class HtChat extends Model<IhtChat> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({ allowNull: false, type: DataType.STRING })
  userId: string;

  @Column({ allowNull: false, type: DataType.STRING })
  name: string;

  @Column({
    field: 'createdAt',
    allowNull: false,
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;

  @Column({
    field: 'updatedAt',
    type: DataType.DATE,
    defaultValue: null,
  })
  updatedAt: Date;

  @Column({
    field: 'deletedAt',
    type: DataType.DATE,
    defaultValue: null,
  })
  deletedAt: Date;
}
