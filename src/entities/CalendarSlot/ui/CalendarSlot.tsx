import React from 'react';
import styles from './CalendarSlot.module.scss';
import { createObserver } from '../../../shared/utils/MobxUtils';
import cn from 'classnames';
import { IIntervalWithDate } from '../../../widget';

export interface ICalendarSlotParams {
  event: IIntervalWithDate;
}

export const CalendarSlot: React.FC<ICalendarSlotParams> = createObserver((props) => {
  const { doctor, cabinet } = props.event;

  const getDoctorName = () => {
    return `${doctor.first_name} ${doctor.last_name.charAt(0)}`;
  };

  const getColorizeClassNameByStatusId = (statusId: number) => {
    if (statusId === 0) {
      return cn(styles.confirmed);
    }
    if (statusId === 1) {
      return cn(styles.waiting);
    }
    if (statusId === 2) {
      return cn(styles.cancelled);
    }
  };

  const getStatusNameByStatusId = (statusId: number) => {
    if (statusId === 0) {
      return 'Подтвержден';
    }
    if (statusId === 1) {
      return 'Ожидание';
    }
    if (statusId === 2) {
      return 'Отменён';
    }
  };

  return (
    <div
      className={cn(styles.slotContainer, getColorizeClassNameByStatusId(props.event?.status || 0))}
    >
      <div className={styles.slotInfo}>
        <div className={styles.slotTitle}>{getDoctorName()}</div>
        <div className={styles.slotCabinet}>каб {cabinet?.number}</div>
      </div>
      <div className={styles.slotStatus}>{getStatusNameByStatusId(props.event?.status || 0)}</div>
    </div>
  );
}, 'CalendarSlot');
