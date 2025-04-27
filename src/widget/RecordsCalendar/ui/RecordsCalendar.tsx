import { useCallback, useMemo } from 'react';
import { createObserver } from '../../../shared/utils/MobxUtils';
import {
  Calendar,
  Culture,
  DateLocalizer,
  EventProps,
  SlotInfo,
  momentLocalizer,
} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './RecordsCalendar.scss';
import 'moment/dist/locale/ru';
import { CalendarSlot } from '../../../entities/CalendarSlot';
import { DateRange } from 'react-day-picker';
import { SelectedRangeType } from '../../SmallCalendar/types';
import { IIntervalWithDate } from '../types';
import { ReceptionStore } from '../../../pages/Reception/model/ReceptionStore';

export interface RecordsCalendar {
  rangeDate: DateRange | undefined;
  selectedRangeType: SelectedRangeType;
  store: ReceptionStore;
}

export const RecordsCalendar: React.FC<RecordsCalendar> = createObserver((params) => {
  const { rangeDate, selectedRangeType, store } = params;
  const { recordIntervals } = store;

  const localizer = momentLocalizer(moment);

  const components = {
    event: ({ event }: EventProps<IIntervalWithDate>) => {
      return <CalendarSlot event={event} />;
    },
  };

  const { formats } = useMemo(() => {
    const formatDate = (
      date: Date,
      format: string,
      culture?: Culture,
      localizer?: DateLocalizer
    ) => {
      return localizer?.format(date, format, culture) || '';
    };

    return {
      formats: {
        weekdayFormat: (date: Date, culture?: Culture, localizer?: DateLocalizer) =>
          formatDate(date, 'dddd', culture, localizer),

        dayFormat: (date: Date, culture?: Culture, localizer?: DateLocalizer) =>
          formatDate(date, 'dddd, D', culture, localizer),
      },
    };
  }, []);

  const onSelectSlot = useCallback((event: SlotInfo) => {
    store.recordCreationModal.show();
    store.slotInfo = event;
  }, []);

  return (
    <Calendar
      localizer={localizer}
      events={recordIntervals}
      components={components}
      view={selectedRangeType}
      onView={() => {}}
      formats={formats}
      date={rangeDate?.to}
      onNavigate={() => {}}
      onSelectSlot={onSelectSlot}
      selectable
    />
  );
}, 'RecordsCalendar');
