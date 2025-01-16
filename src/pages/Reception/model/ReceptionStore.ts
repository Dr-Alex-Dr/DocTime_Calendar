import { makeAutoObservable } from 'mobx';
import { api } from '../../../shared/api/schedule/Api';
import { ICabinetOut, IDoctorOut } from '../../../shared/api/schedule/data-contracts';
import { Moment } from 'moment';
import { IIntervalWithDate } from '../../../widget';
import { ModalStore } from '../../../shared/utils';
import { SlotInfo } from 'react-big-calendar';

export class ReceptionStore {
  private apiResource = new api();

  doctors: IDoctorOut[] = [];
  cabinets: ICabinetOut[] = [];
  recordIntervals: IIntervalWithDate[] | undefined = undefined;
  createEventModal = new ModalStore();
  slotInfo: SlotInfo | null = null;

  isLoadingDoctors = false;
  isLoadingCabinets = false;

  selectDoctor: IDoctorOut | null = null;
  selectCabinet: ICabinetOut | null = null;
  selectStartDate: Moment | null = null;
  selectEndDate: Moment | null = null;

  constructor() {
    makeAutoObservable(this);
    this.getRecordIntervals();
  }

  getRecordIntervals = async () => {
    try {
      const response = await this.apiResource.appsIntervalsApiHandlersAll();

      this.recordIntervals = response.data.map((res) => {
        return { ...res, start: new Date(res.start), end: new Date(res.end) };
      });
    } catch (error) {
      console.log(error);
    }
  };

  getAllDoctors = async () => {
    try {
      this.isLoadingDoctors = true;
      const response = await this.apiResource.appsDoctorsApiHandlersAll();
      this.doctors = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoadingDoctors = false;
    }
  };

  getAllCabinets = async () => {
    try {
      this.isLoadingCabinets = true;
      const response = await this.apiResource.appsCabinetsApiHandlersAll();
      this.cabinets = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoadingCabinets = false;
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
        await this.apiResource.appsIntervalsApiHandlersAdd({
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
