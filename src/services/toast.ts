import { makeAutoObservable, observable } from 'mobx';
import { AlertColor } from '@mui/material/Alert/Alert';


export class ToastService {

  @observable
  open = false;

  @observable
  title = '';

  @observable
  message = '';

  @observable
  status: AlertColor = 'info';

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true
    });
  }

  success(message: string) {
    this.show('success', message);
  }

  error(message: string) {
    this.show('error', message);
  }

  warning(message: string) {
    this.show('warning', message);
  }

  info(message: string) {
    this.show('info', message);
  }

  show(status: AlertColor, msg: string) {
    this.open = true;
    this.status = status;
    this.message = msg;
  }

  close() {
    this.open = false;
  }

}

export const toastService = new ToastService();
