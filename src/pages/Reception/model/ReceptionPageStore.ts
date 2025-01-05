import { action, computed, observable, toJS } from 'mobx';
import { DateRange } from 'react-day-picker';
import { endOfWeek, startOfWeek, endOfMonth, startOfMonth } from 'date-fns';

type selectedRangeType = 'day' | 'week' | 'month';

export class ReceptionPageStore {
  @observable selectedWeek: DateRange | undefined;
  @observable selectedMonth: DateRange | undefined;
  @observable selectedDay: Date | undefined;

  @observable selectedRangeType: selectedRangeType = 'week';

  constructor() {
    const currentDate = new Date();

    // this.setRangeByDate(currentDate);
  }

  @action
  setRangeByDate = (day: Date) => {
    if (this.selectedRangeType === 'day') {
      this.selectedDay = day;
    }
    if (this.selectedRangeType === 'week') {
      this.selectedWeek = {
        from: startOfWeek(day, { weekStartsOn: 1 }),
        to: endOfWeek(day, { weekStartsOn: 1 }),
      };
    }
    if (this.selectedRangeType === 'month') {
      this.selectedMonth = {
        from: startOfMonth(day),
        to: endOfMonth(day),
      };
    }
  };

  @computed
  get rangeType() {
    if (this.selectedRangeType === 'day') {
      return {
        selected: this.selectedDay,
      };
    }
    if (this.selectedRangeType === 'week') {
      return {
        selected: this.selectedWeek,
        range_start: this.selectedWeek?.from,
        range_end: this.selectedWeek?.to,
      };
    }
    if (this.selectedRangeType === 'month') {
      return {
        selected: this.selectedMonth,
        range_start: this.selectedMonth?.from,
        range_end: this.selectedMonth?.to,
      };
    }
  }
}
