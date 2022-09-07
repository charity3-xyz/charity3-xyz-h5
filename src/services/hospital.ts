import { makeAutoObservable } from 'mobx';
import { Url } from '../constants/url';
import { execute } from '../core/Request';
import { Page } from '@aomi/common-service/Page';
import { Hospital } from '../entity/medical/hospital';

/**
 * 医院服务
 */
export class HospitalService {
  loading = false;

  list: Array<Hospital> = [];

  constructor() {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
      },
    );
  }

  async query() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    try {
      this.list = await execute({
        url: Url.hospital,
      });
    } finally {
      this.loading = false;
    }
  }
}

export const hospitalService = new HospitalService();
