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

  getFollower = (): number => {
    return this.cashedContent['follower'];
  };

  increaseFollower = (amount: number) => {
    this.cashedContent['follower'] = round(
      (this.cashedContent['follower'] += amount),
    );
  };

  decreaseFollower = (amount: number) => {
    this.cashedContent['follower'] = round(
      (this.cashedContent['follower'] -= amount),
    );
  };
}

export default AccountManager;
