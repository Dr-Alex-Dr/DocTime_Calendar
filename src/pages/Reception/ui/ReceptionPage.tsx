import { useState } from 'react';
import { createObserver } from '../../../shared/utils/MobxUtils';
import { RecordsCalendar, SmallCalendar } from '../../../widget';
import styles from './ReceptionPage.module.scss';
import { DateRange } from 'react-day-picker';
import { SelectedRangeType } from '../../../widget/SmallCalendar/types';

export const ReceptionPage = createObserver(() => {
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>();
  const [selectedRangeType, setSelectedRangeType] = useState<SelectedRangeType>('week');

  return (
    <div className={styles.ReceptionContainer}>
      <div className={styles.SmallCalendarContainer}>
        <SmallCalendar
          rangeDate={rangeDate}
          setRangeDate={setRangeDate}
          selectedRangeType={selectedRangeType}
          setSelectedRangeType={setSelectedRangeType}
        />
      </div>
      <RecordsCalendar rangeDate={rangeDate} selectedRangeType={selectedRangeType} />
    </div>
  );
}, 'ReceptionPage');
