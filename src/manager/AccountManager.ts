import { ACCOUNT_FILE_PATH } from '../const';
import accountFile from '../../assets/Account.json';
import FileManager from './FileManager';
import { round } from '../utils';

class AccountManager extends FileManager {
  constructor() {
    super(ACCOUNT_FILE_PATH);

    //make file known to webpack
    accountFile;
  }

  getMoney = (): number => {
    return this.cashedContent['money'];
  };

  increaseMoney = (amount: number) => {
    this.cashedContent['money'] = round(
      (this.cashedContent['money'] += amount),
    );
  };
}

export default AccountManager;
