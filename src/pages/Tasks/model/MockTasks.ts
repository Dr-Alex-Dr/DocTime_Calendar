import { Task } from './TasksStore';

export const mockTasks: Task[] = [
  {
    id: '1',
    patientName: 'Иванов Иван Иванович',
    phone: '123456789',
    doctorName: 'Смирнова Анна Андреевна',
    date: '2023-10-05',
    time: '10:00',
    status: 'new',
    isNew: true,
    notes: 'Пример заметки',
  },
  {
    id: '2',
    patientName: 'Петров Петр Петрович',
    phone: '987654321',
    doctorName: 'Кузнецов Сергей Викторович',
    date: '2023-10-06',
    time: '11:00',
    status: 'done',
    isNew: false,
    notes: 'Вторая заметка',
  },
];
