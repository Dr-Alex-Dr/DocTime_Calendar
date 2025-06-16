import { DateRange } from 'react-day-picker';

export interface ISmallCalendarParams {
  rangeDate: DateRange | undefined;
  setRangeDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  selectedRangeType: SelectedRangeType;
  setSelectedRangeType: React.Dispatch<React.SetStateAction<SelectedRangeType>>;
}

export interface IGroupButtonsParams {
  setSelectedRangeType: React.Dispatch<React.SetStateAction<SelectedRangeType>>;
  selectedRangeType: SelectedRangeType;
}

export interface IButtonConfig {
  label: string;
  type: SelectedRangeType;
}

export type SelectedRangeType = 'day' | 'week' | 'month';
