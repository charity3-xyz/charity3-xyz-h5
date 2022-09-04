import { StorageController } from 'mobx-persist-store/lib/esm2017/types';

export class Storage implements StorageController {
  getItem<T>(key: string): string | Promise<string | T | null> | null | T {
    return localStorage.getItem(key);
  }

  removeItem(key: string): void | Promise<void> {
    return localStorage.removeItem(key);
  }

  setItem(key: string, value: any): void | Promise<void> {
    return localStorage.setItem(key, value);
  }
}
