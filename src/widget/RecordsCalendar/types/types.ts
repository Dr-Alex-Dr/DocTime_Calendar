import { IIntervalOut } from '../../../shared/api/schedule/data-contracts';

export interface IIntervalWithDate extends Omit<IIntervalOut, 'start' | 'end'> {
  start: Date;
  end: Date;
}
