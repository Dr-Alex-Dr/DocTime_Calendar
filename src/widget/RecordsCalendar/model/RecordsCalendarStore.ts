export class RecordsCalendarStore {
  constructor() {}

  get recordIntervals() {
    return [
      {
        start: new Date('2024-12-22T07:30:00'),
        end: new Date('2024-12-22T08:15:00'),
        data: {
          appointment: {
            name: 'Иванова М.С.',
            status: 'Первичный прием',
            cabinetNumber: 'каб 101',
          },
        },
        resourceId: 1,
      },
      {
        start: new Date('2024-12-20T04:30:00'),
        end: new Date('2024-12-20T05:15:00'),
        data: {
          appointment: {
            name: 'Иванова М.С.',
            status: 'Первичный прием',
            cabinetNumber: 'каб 101',
          },
        },
        resourceId: 1,
      },
    ];
  }
}
