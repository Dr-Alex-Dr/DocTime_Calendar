import { makeAutoObservable } from 'mobx';
import { IIntervalWithDate } from '../types';
import { api } from '../../../shared/api/schedule/Api';

export class RecordsCalendarStore {
  request = new api();
  recordIntervals: IIntervalWithDate[] | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
    this.getRecordIntervals();
  }

  getRecordIntervals = async () => {
    try {
      const response = await this.request.appsIntervalsApiHandlersAll();

      this.recordIntervals = response.data.map((res) => {
        return { ...res, start: new Date(res.start), end: new Date(res.end) };
      });
    } catch (error) {
      console.log(error);
    }
  };
}
