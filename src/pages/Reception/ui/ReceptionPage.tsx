import { useState } from 'react';
import { createObserver } from '../../../shared/utils/MobxUtils';
import { RecordsCalendar, SmallCalendar } from '../../../widget';
import styles from './ReceptionPage.module.scss';
import { DateRange } from 'react-day-picker';
import { SelectedRangeType } from '../../../widget/SmallCalendar/types';
import { Breadcrumbs } from '../../../entities/Breadcrumbs';
import { CreateEventModal } from '../../../widget/CreateEvent';

export const ReceptionPage = createObserver(() => {
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>();
  const [selectedRangeType, setSelectedRangeType] = useState<SelectedRangeType>('week');

  const [openModal, setOpenModal] = useState(false);
  const [eventInfo, setEventInfo] = useState<any>();

  return (
    <div className={styles.receptionContainer}>
      <Breadcrumbs title="Главная" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 className={styles.receptionTitle}>Расписание на неделю</h2>
        <img style={{ marginRight: 16 }} src="../../../../images/_Fab_.svg" />
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
            setOpenModal={setOpenModal}
            setEventInfo={setEventInfo}
          />
        </div>
      </div>

      <CreateEventModal open={openModal} setOpen={setOpenModal} eventInfo={eventInfo} />
    </div>
  );
}, 'ReceptionPage');
