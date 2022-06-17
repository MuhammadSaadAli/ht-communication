import { Sequelize } from 'sequelize-typescript';
import { HtChat } from './model/ht-chat.model';

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'WizTech123a#@!',
        database: 'ht_communication',
      });
      sequelize.addModels([HtChat]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
