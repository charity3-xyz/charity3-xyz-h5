import { Web3Provider, JsonRpcProvider, getDefaultProvider } from '@ethersproject/providers';

export class ProviderService {
  get(): JsonRpcProvider {
    getDefaultProvider();
    return new Web3Provider((global as any).ethereum);
  }
}

export const providerService = new ProviderService();
