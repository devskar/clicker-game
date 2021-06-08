import { ACCOUNT_FILE_PATH } from '../const';
import accountFile from '../../assets/Account.json';
import Manager from './Manager';

class AccountManager extends Manager {
  constructor() {
    super(ACCOUNT_FILE_PATH);

    //make file known to webpack
    accountFile;
  }

  getMoney = (): number => {
    return this.cashedContent['money'];
  };

  increaseMoney = (amount: number) => {
    this.cashedContent['money'] = this.cashedContent['money'] += amount;
  };
}

export default AccountManager;
