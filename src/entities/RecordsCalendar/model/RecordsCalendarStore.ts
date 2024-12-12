export class RecordsCalendarStore {
  constructor() {}

  get recordIntervals() {
    return [
      {
        start: new Date('2024-12-09T07:30:00'),
        end: new Date('2024-12-09T08:15:00'),
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
        start: new Date('2024-12-09T09:00:00'),
        end: new Date('2024-12-09T11:00:00'),
        data: {
          appointment: {
            name: 'Линьков Л.Б.',
            status: 'Первичный прием',
            cabinetNumber: 'каб 147',
          },
        },
        resourceId: 1,
      },
      {
        start: new Date('2024-12-10T08:30:00'),
        end: new Date('2024-12-10T09:00:00'),
        data: {
          appointment: {
            name: 'Белов Д.А.',
            status: 'Повторный осмотр',
            cabinetNumber: 'каб 150',
          },
        },
        resourceId: 2,
      },
      {
        start: new Date('2024-12-10T06:00:00'),
        end: new Date('2024-12-10T06:30:00'),
        data: {
          appointment: {
            name: 'Валенюк А.А.',
            status: 'Повторный осмотр',
            cabinetNumber: 'каб 147',
          },
        },
        resourceId: 100,
      },
      {
        start: new Date('2024-12-10T10:30:00'),
        end: new Date('2024-12-10T11:00:00'),
        data: {
          appointment: {
            name: 'Белов Д.А.',
            status: 'Консультация ',
            cabinetNumber: 'каб 150',
          },
        },
        resourceId: 3,
      },
      {
        start: new Date('2024-12-11T09:00:00'),
        end: new Date('2024-12-11T09:45:00'),
        data: {
          appointment: {
            name: 'Кузнецов П.В.',
            status: 'Первичный прием',
            cabinetNumber: 'каб 102',
          },
        },
        resourceId: 1,
      },
      {
        start: new Date('2024-12-12T13:00:00'),
        end: new Date('2024-12-12T13:45:00'),
        data: {
          appointment: {
            name: 'Смирнова О.А.',
            status: 'Повторный осмотр',
            cabinetNumber: 'каб 123',
          },
        },
        resourceId: 2,
      },
      {
        start: new Date('2024-12-13T10:15:00'),
        end: new Date('2024-12-13T11:00:00'),
        data: {
          appointment: {
            name: 'Тихонов И.В.',
            status: 'Консультация ',
            cabinetNumber: 'каб 132',
          },
        },
        resourceId: 3,
      },
      {
        start: new Date('2024-12-14T15:30:00'),
        end: new Date('2024-12-14T16:15:00'),
        data: {
          appointment: {
            name: 'Петрова Л.В.',
            status: 'Первичный прием',
            cabinetNumber: 'каб 120',
          },
        },
        resourceId: 1,
      },
      {
        start: new Date('2024-12-15T11:00:00'),
        end: new Date('2024-12-15T12:00:00'),
        data: {
          appointment: {
            name: 'Сидоров А.А.',
            status: 'Повторный осмотр',
            cabinetNumber: 'каб 150',
          },
        },
        resourceId: 2,
      },
      {
        start: new Date('2024-12-16T08:00:00'),
        end: new Date('2024-12-16T09:00:00'),
        data: {
          appointment: {
            name: 'Федоров Н.И.',
            status: 'Консультация ',
            cabinetNumber: 'каб 140',
          },
        },
        resourceId: 3,
      },
      {
        start: new Date('2024-12-17T14:00:00'),
        end: new Date('2024-12-17T15:30:00'),
        data: {
          appointment: {
            name: 'Савельева Ю.В.',
            status: 'Первичный прием',
            cabinetNumber: 'каб 101',
          },
        },
        resourceId: 1,
      },
      {
        start: new Date('2024-12-18T10:30:00'),
        end: new Date('2024-12-18T11:15:00'),
        data: {
          appointment: {
            name: 'Орлов И.П.',
            status: 'Повторный осмотр',
            cabinetNumber: 'каб 132',
          },
        },
        resourceId: 2,
      },
      {
        start: new Date('2024-12-19T09:00:00'),
        end: new Date('2024-12-19T09:45:00'),
        data: {
          appointment: {
            name: 'Мельников А.В.',
            status: 'Консультация ',
            cabinetNumber: 'каб 150',
          },
        },
        resourceId: 3,
      },
      {
        start: new Date('2024-12-20T14:30:00'),
        end: new Date('2024-12-20T15:30:00'),
        data: {
          appointment: {
            name: 'Васильева Н.К.',
            status: 'Первичный прием',
            cabinetNumber: 'каб 140',
          },
        },
        resourceId: 1,
      },
      {
        start: new Date('2024-12-21T09:15:00'),
        end: new Date('2024-12-21T10:00:00'),
        data: {
          appointment: {
            name: 'Григорьев С.Л.',
            status: 'Повторный осмотр',
            cabinetNumber: 'каб 123',
          },
        },
        resourceId: 2,
      },
      {
        start: new Date('2024-12-22T13:00:00'),
        end: new Date('2024-12-22T14:00:00'),
        data: {
          appointment: {
            name: 'Захарова И.П.',
            status: 'Консультация ',
            cabinetNumber: 'каб 101',
          },
        },
        resourceId: 3,
      },
      {
        start: new Date('2024-12-23T11:30:00'),
        end: new Date('2024-12-23T12:15:00'),
        data: {
          appointment: {
            name: 'Денисов Р.Т.',
            status: 'Первичный прием',
            cabinetNumber: 'каб 147',
          },
        },
        resourceId: 1,
      },
      {
        start: new Date('2024-12-24T15:00:00'),
        end: new Date('2024-12-24T15:45:00'),
        data: {
          appointment: {
            name: 'Козлова А.С.',
            status: 'Повторный осмотр',
            cabinetNumber: 'каб 132',
          },
        },
        resourceId: 2,
      },
    ];
  }
}
