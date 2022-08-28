import { makeAutoObservable, observable } from 'mobx';
import { providerService } from './provider';

export class WalletService {
  @observable
  accountAddress: string | null = null;

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true,
    });
  }

  /**
   * 是否安装了钱包
   */
  get walletInstalled(): boolean {
    return typeof (global as any).web3 !== 'undefined';
  }

  /**
   * 是否是小狐狸钱包
   */
  isMetaMask(): boolean {
    return this.walletInstalled && (global as any).web3.currentProvider.isMetaMask;
  }

  /**
   * 连接钱包
   */
  async connect() {
    if (!this.walletInstalled) {
      console.log('钱包未安装');
      return;
    }
    const provider = providerService.get();
    try {
      const accounts = await provider.send('eth_requestAccounts', []);
      this.accountAddress = accounts[0];
      console.log(`当前地址 ${this.accountAddress}`);
    } catch (e: any) {
      console.error(`钱包连接失败: ${e.message}`, e);
    }
  }

  async sign(message: string): Promise<string> {
    if (!this.walletInstalled) {
      console.log('钱包未安装');
      return '';
    }
    const provider = providerService.get();

    const signer = provider.getSigner();
    return await signer.signMessage(message);
  }

  async getNft() {}
}

export const walletService = new WalletService();
