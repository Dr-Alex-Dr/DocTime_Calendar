import { makeAutoObservable, observable } from 'mobx';
import { ICabinetOut, IDoctorOut } from '../../../shared/api/schedule/data-contracts';
import { api } from '../../../shared/api/schedule/Api';
import { Moment } from 'moment';

export class CreateEventStore {
  request = new api();
  @observable doctors: IDoctorOut[] = [];
  @observable cabinets: ICabinetOut[] = [];
  @observable isLoading = false;

  selectDoctor: IDoctorOut | null = null;
  selectCabinet: ICabinetOut | null = null;
  selectStartDate: Moment | null = null;
  selectEndDate: Moment | null = null;

  scheduleId = 'd7a1e5ce-9252-42aa-929d-6b1a21004c77';

  constructor() {
    makeAutoObservable(this);
  }

  getAllDoctors = async () => {
    try {
      this.isLoading = true;
      const response = await this.request.appsDoctorsApiHandlersAll();
      this.doctors = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  };

  getAllCabinets = async () => {
    try {
      this.isLoading = true;
      const response = await this.request.appsCabinetsApiHandlersAll();
      this.cabinets = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  };

  createInterval = async () => {
    try {
      if (
        this.selectStartDate &&
        this.selectEndDate &&
        this.selectCabinet?.id &&
        this.selectDoctor?.id
      ) {
        const response = await this.request.appsIntervalsApiHandlersAdd({
          start: this.selectStartDate.toISOString(),
          end: this.selectEndDate.toISOString(),
          cabinet_id: this.selectCabinet?.id,
          doctor_id: this.selectDoctor?.id,
          schedule_id: 'd7a1e5ce-9252-42aa-929d-6b1a21004c77',
          status: 1,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
