import { makeAutoObservable, observable } from 'mobx';
import { api } from '../../../shared/api/schedule/Api';
import { ICabinetOut, IDoctorOut } from '../../../shared/api/schedule/data-contracts';
import { Moment } from 'moment';
import { IIntervalWithDate } from '../../../widget';

export class ReceptionStore {
  request = new api();
  @observable doctors: IDoctorOut[] = [];
  @observable cabinets: ICabinetOut[] = [];
  @observable isLoading = false;

  selectDoctor: IDoctorOut | null = null;
  selectCabinet: ICabinetOut | null = null;
  selectStartDate: Moment | null = null;
  selectEndDate: Moment | null = null;

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
        await this.request.appsIntervalsApiHandlersAdd({
          start: this.selectStartDate.toISOString(),
          end: this.selectEndDate.toISOString(),
          cabinet_id: this.selectCabinet?.id,
          doctor_id: this.selectDoctor?.id,
          schedule_id: 'd7a1e5ce-9252-42aa-929d-6b1a21004c77',
          status: 1,
        });

        await this.getRecordIntervals();
      }
    } catch (error) {
      console.log(error);
    }
  };
}
