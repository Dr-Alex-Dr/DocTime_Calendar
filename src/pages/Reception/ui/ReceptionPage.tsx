import { useState } from 'react';
import { createObserver } from '../../../shared/utils/MobxUtils';
import { RecordsCalendar, SmallCalendar } from '../../../widget';
import styles from './ReceptionPage.module.scss';
import { DateRange } from 'react-day-picker';
import { SelectedRangeType } from '../../../widget/SmallCalendar/types';
import { Breadcrumbs } from '../../../entities/Breadcrumbs';

export const ReceptionPage = createObserver(() => {
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>();
  const [selectedRangeType, setSelectedRangeType] = useState<SelectedRangeType>('week');

  return (
    <div className={styles.receptionContainer}>
      <Breadcrumbs title="Главная" />
      <h2 className={styles.receptionTitle}>Расписание на неделю</h2>
      <div className={styles.calendarContainer}>
        <div className={styles.smallCalendarContainer}>
          <SmallCalendar
            rangeDate={rangeDate}
            setRangeDate={setRangeDate}
            selectedRangeType={selectedRangeType}
            setSelectedRangeType={setSelectedRangeType}
          />
        </div>
        <div className={styles.recorderCalendarContainer}>
          <RecordsCalendar rangeDate={rangeDate} selectedRangeType={selectedRangeType} />
        </div>
      </div>
    </div>
  );
}, 'ReceptionPage');
