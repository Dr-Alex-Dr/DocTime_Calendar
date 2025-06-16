import { useMemo, useState } from 'react';
import { createObserver } from '../../../shared/utils/MobxUtils';
import { RecordsCalendar, SmallCalendar } from '../../../widget';
import styles from './ReceptionPage.module.scss';
import { DateRange } from 'react-day-picker';
import { SelectedRangeType } from '../../../widget/SmallCalendar/types';
import { Breadcrumbs } from '../../../entities/Breadcrumbs';
import { CreateEventModal } from '../../../widget/CreateEvent';
import { ReceptionStore } from '../model/ReceptionStore';

export const ReceptionPage = createObserver(() => {
  const store = useMemo(() => new ReceptionStore(), []);

  const [rangeDate, setRangeDate] = useState<DateRange | undefined>();
  const [selectedRangeType, setSelectedRangeType] = useState<SelectedRangeType>('week');

  return (
    <div className={styles.receptionContainer}>
      <Breadcrumbs title="Главная" />
      <div className={styles.receptionHeader}>
        <h2 className={styles.receptionTitle}>Расписание на неделю</h2>
        <img style={{ marginRight: 16 }} src="./src/images/_Fab_.svg" />
      </div>

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
          <RecordsCalendar
            rangeDate={rangeDate}
            selectedRangeType={selectedRangeType}
            store={store}
          />
        </div>
      </div>

      <CreateEventModal store={store} />
    </div>
  );
}, 'ReceptionPage');
