import { mockTasks } from './MockTasks';
import { makeAutoObservable } from 'mobx';
import { ModalStore } from '../../../shared/utils/ModalStore';

export interface Task {
  id: string;
  patientName: string;
  phone: string;
  doctorName: string;
  date: string;
  time: string;
  status: 'new' | 'done';
  isNew?: boolean;
  notes?: string;
}

export class TasksStore {
  private tasks: Task[] = [];
  public isLoading: boolean = false;
  public isModalOpen: boolean = false;
  public modalStore: ModalStore = new ModalStore();

  constructor() {
    makeAutoObservable(this);
    this.loadTasks();
  }

  public get getTasks() {
    return this.tasks;
  }

  public async loadTasks() {
    this.isLoading = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.tasks = mockTasks;
    this.isLoading = false;
  }

  public openModal() {
    this.isModalOpen = true;
  }

  public closeModal() {
    this.isModalOpen = false;
  }

  public removeTask(taskId: string) {
    const idx = this.tasks.findIndex((t) => t.id === taskId);
    if (idx !== -1) {
      this.tasks.splice(idx, 1);
    }
  }
}
