import { observable } from 'mobx';
import { IIntervalOut } from '../../../shared/api/schedule/data-contracts';
import { IIntervalWithDate } from '../types';

export class RecordsCalendarStore {
  @observable recordIntervals: IIntervalWithDate[] | undefined = undefined;

  constructor() {
    this.getRecordIntervals();
  }

  getRecordIntervals = async () => {
    try {
      const response: IIntervalOut[] = [
        {
          doctor: {
            cabinets: [
              {
                id: 'b8f6b3e1-2d74-4e93-8513-efb5f93fa1a5',
                number: '101',
                description: null,
              },
              {
                id: 'd7fbdafa-5126-43f1-9a2e-d5f17eeb1b1e',
                number: '102',
                description: null,
              },
            ],
            priority_cabinet: {
              id: 'b8f6b3e1-2d74-4e93-8513-efb5f93fa1a5',
              number: '101',
              description: null,
            },
            id: '6f42a69a-c42c-4b24-95c3-34c51f3e5a1f',
            first_name: 'Иван',
            last_name: 'Иванов',
            father_name: null,
          },
          schedule: {
            id: '2c5c1f4d-7a62-48d4-9c3e-e9e92f0b12d3',
            name: 'Расписание утренней смены',
            description: null,
          },
          cabinet: {
            id: 'b8f6b3e1-2d74-4e93-8513-efb5f93fa1a5',
            number: '101',
            description: null,
          },
          id: '46be40b1-7db7-489f-9b45-e882c091a5db',
          start: '2025-01-09T08:00:00Z',
          end: '2025-01-09T12:00:00Z',
        },
      ];

      this.recordIntervals = response.map((res) => {
        return { ...res, start: new Date(res.start), end: new Date(res.end) };
      });
    } catch (error) {
      console.log(error);
    }
  };
}
