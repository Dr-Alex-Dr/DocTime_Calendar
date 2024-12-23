import React, { useState } from 'react';
import styles from './CalendarSlot.module.scss';

export enum ICalendarSlotStatus {}

export enum ICalendarSlotState {}

export interface ICalendarSlotParams {
  name: string;
  status: string;
  cabinetNumber: string;
}

export type IEventItemParams = {
  start?: Date;
  end?: Date;
  data?: { appointment?: ICalendarSlotParams };
  resourceId?: number;
};

export const CalendarSlot: React.FC<ICalendarSlotParams> = (props) => {
  const { name, status, cabinetNumber } = props;

  return (
    <div className={styles.slotContaienr}>
      <div className={styles.slotInfo}>
        <div>{name}</div>
        <div>{cabinetNumber}</div>
      </div>
      <div className={styles.slotStatus}>{status}</div>
    </div>
  );
};
