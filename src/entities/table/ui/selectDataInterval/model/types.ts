import { Dayjs } from "dayjs";

export interface ISelectDataIntervalProps {
    type: 'start' | 'end';
    label: string;
    startData: Dayjs | null;
    endData: Dayjs | null;
    handleDateChange: (newValue: Dayjs | null, type: 'start' | 'end') => void;
}