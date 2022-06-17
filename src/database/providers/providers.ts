import { HT_CHAT } from '../constants/constants';
import { HtChat } from '../model/ht-chat.model';

export const providers = [
  {
    provide: HT_CHAT,
    useValue: HtChat,
  },
];
