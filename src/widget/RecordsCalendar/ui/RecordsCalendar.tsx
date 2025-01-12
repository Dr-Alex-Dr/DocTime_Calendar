import { useCallback, useMemo } from 'react';
import { createObserver } from '../../../shared/utils/MobxUtils';
import { Calendar, Culture, DateLocalizer, EventProps, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { RecordsCalendarStore } from '../model/RecordsCalendarStore';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './RecordsCalendar.scss';
import 'moment/dist/locale/ru';
import { CalendarSlot } from '../../../entities/CalendarSlot';
import { DateRange } from 'react-day-picker';
import { SelectedRangeType } from '../../SmallCalendar/types';
import { IIntervalWithDate } from '../types';

export interface RecordsCalendar {
  rangeDate: DateRange | undefined;
  selectedRangeType: SelectedRangeType;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEventInfo: React.Dispatch<any>;
}

export const RecordsCalendar: React.FC<RecordsCalendar> = createObserver((params) => {
  const store = useMemo(() => new RecordsCalendarStore(), []);
  const { rangeDate, selectedRangeType, setOpenModal, setEventInfo } = params;
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

  const onSelectSlot = useCallback((event: any) => {
    setOpenModal(true);
    setEventInfo(event);
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
