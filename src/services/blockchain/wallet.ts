import { makeAutoObservable, observable } from 'mobx';
import { providerService } from './provider';
import { Contract } from 'ethers';
import { formatEther, formatUnits, parseEther, parseUnits } from '@ethersproject/units';

import ERC20_BASE_ABI from './erc20-base-abi.json';

const networkTetherContract = {
  mainnet: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  rinkeby: '0x3B00Ef435fA4FcFF5C209a37d1f3dcff37c705aD',
};

export class WalletService {
  // @observable
  // accountAddress: string | null = null;

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true,
    });
    // this.loadConnectAccount();
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

  get accountAddress(): string | undefined {
    return (global as any).ethereum.selectedAddress;
  }

  async usdtBalance() {
    const contract = new Contract('', ERC20_BASE_ABI);
    const balance = await contract.balanceOf(this.accountAddress);
    return Number.parseFloat(formatUnits(balance, 6)).toFixed(4);
  }

  // async loadConnectAccount() {
  //   const provider = providerService.get();
  //   this.accountAddress = await provider.getSigner().getAddress();
  //   console.log(`已连接的地址: ${this.accountAddress}`);
  // }

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
      await provider.send('eth_requestAccounts', []);
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
