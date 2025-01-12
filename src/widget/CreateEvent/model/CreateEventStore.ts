import { observable } from 'mobx';
import { ICabinetOut, IDoctorOut } from '../../../shared/api/schedule/data-contracts';
import { api } from '../../../shared/api/schedule/Api';

export class CreateEventStore {
  request = new api();
  @observable doctors: IDoctorOut[] = [];
  @observable cabinets: ICabinetOut[] = [];
  @observable isLoading = false;

  constructor() {}

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
}
