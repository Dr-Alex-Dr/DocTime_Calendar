import { makeAutoObservable } from 'mobx';

export class ModalStore {
  shown = false;

  constructor() {
    makeAutoObservable(this);
  }

  show = () => {
    this.shown = true;
  };

  hide = () => {
    this.shown = false;
  };
}
