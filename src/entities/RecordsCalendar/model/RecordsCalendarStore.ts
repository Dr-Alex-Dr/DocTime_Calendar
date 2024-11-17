import moment from 'moment';

export class RecordsCalendarStore {
  constructor() {}

  get recordIntervals() {
    return [
      {
        title: '1',
        start: moment().toDate(),
        end: moment().add(1, 'days').toDate(),
      },
      {
        title: '2',
        start: moment().add(1, 'days').toDate(),
        end: moment().add(2, 'days').toDate(),
      },
      {
        title: '3',
        start: moment().add(2, 'days').toDate(),
        end: moment().add(3, 'days').toDate(),
      },
    ];
  }
}
