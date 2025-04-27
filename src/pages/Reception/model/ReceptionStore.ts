import { makeAutoObservable } from 'mobx';
import { api } from '../../../shared/api/schedule/Api';
import { ICabinetOut, IDoctorOut, IIntervalOut } from '../../../shared/api/schedule/data-contracts';
import { Moment } from 'moment';
import { IIntervalWithDate } from '../../../widget';
import { ModalStore } from '../../../shared/utils';
import { SlotInfo } from 'react-big-calendar';
import moment from 'moment';

const CONFIG = {
  SCHEDULE_ID: '5303ab13-9553-423e-9176-3d7e841e0711',
  EVENT_STATUS: 1,
} as const;

interface ISelectedIntervalValues {
  doctor: IDoctorOut | null;
  cabinet: ICabinetOut | null;
}

export class ReceptionStore {
  private readonly apiResource = new api();

  doctors: IDoctorOut[] = [];
  cabinets: ICabinetOut[] = [];
  recordIntervals: IIntervalWithDate[] | undefined = undefined;
  recordCreationModal = new ModalStore();
  slotInfo: SlotInfo | null = null;

  isLoading = {
    doctors: false,
    cabinets: false,
  };

  selectedIntervalValues: ISelectedIntervalValues = {
    doctor: null,
    cabinet: null,
  };

  constructor() {
    makeAutoObservable(this);
    this.getRecordIntervals();
  }

  getRecordIntervals = async () => {
    try {
      const response = await this.apiResource.appsIntervalsApiHandlersAll();
      this.recordIntervals = response.data.map((res: IIntervalOut) => ({
        ...res,
        start: new Date(res.start),
        end: new Date(res.end),
      }));
    } catch (error) {
      this.handleError('Не удалось загрузить интервалы', error);
    }
  };

  getAllDoctors = async () => {
    try {
      this.isLoading.doctors = true;
      const response = await this.apiResource.appsDoctorsApiHandlersAll();
      this.doctors = response.data;
    } catch (error) {
      this.handleError('Не удалось загрузить список врачей', error);
    } finally {
      this.isLoading.doctors = false;
    }
  };

  getAllCabinets = async () => {
    try {
      this.isLoading.cabinets = true;
      const response = await this.apiResource.appsCabinetsApiHandlersAll();
      this.cabinets = response.data;
    } catch (error) {
      this.handleError('Не удалось загрузить список кабинетов', error);
    } finally {
      this.isLoading.cabinets = false;
    }
  };

  setSelectedDate = (date: Moment | null) => {
    if (!date || !this.slotInfo?.start) {
      return;
    }

    this.slotInfo.start = date.toDate();
  };

  setAppointmentDuration = (duration: number | null) => {
    if (!this.slotInfo?.start || duration === null) {
      return;
    }

    const start = moment(this.slotInfo.start);
    this.slotInfo.end = start.clone().add(duration, 'minute').toDate();
  };

  createInterval = async () => {
    try {
      const { doctor, cabinet } = this.selectedIntervalValues;

      if (!doctor?.id || !cabinet?.id || !this.slotInfo?.start || !this.slotInfo?.end) {
        return;
      }

      await this.apiResource.appsIntervalsApiHandlersAdd({
        start: moment(this.slotInfo.start).format('YYYY-MM-DDTHH:mm:ss'),
        end: moment(this.slotInfo.end).format('YYYY-MM-DDTHH:mm:ss'),
        cabinet_id: cabinet.id,
        doctor_id: doctor.id,
        schedule_id: CONFIG.SCHEDULE_ID,
        status: CONFIG.EVENT_STATUS,
      });

      await this.getRecordIntervals();
      this.recordCreationModal.hide();
    } catch (error) {
      this.handleError('Не удалось создать интервал', error);
    }
  };

  private handleError(message: string, error: unknown) {
    console.error(message, error);
  }
}
