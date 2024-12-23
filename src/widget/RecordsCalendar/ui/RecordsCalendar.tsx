import { useMemo } from 'react';
import { createObserver } from '../../../shared/utils/MobxUtils';
import { Calendar, Culture, DateLocalizer, EventProps, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { RecordsCalendarStore } from '../model/RecordsCalendarStore';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './RecordsCalendar.scss';
import 'moment/dist/locale/ru';
import { IEventItemParams } from '../../../entities/CalendarSlot';
import { CalendarSlot } from '../../../entities/CalendarSlot';

export const RecordsCalendar = createObserver(() => {
  const recordsCalendarStore = new RecordsCalendarStore();
  const { recordIntervals } = recordsCalendarStore;

  const localizer = momentLocalizer(moment);

  // const eventPropGetter = (event: any) => {
  //   const status = event?.data?.appointment?.status;
  //   return {
  //     style: {
  //       backgroundColor: statusColors[status],
  //       color: statusFontColors[status],
  //       border: `1px solid ${statusBorderColors[status]}`,
  //       borderRadius: '5px',
  //       padding: '5px',
  //     },
  //   };
  // };

  const components: any = {
    event: ({ event }: EventProps<IEventItemParams>) => {
      const data = event?.data;
      if (data?.appointment)
        return (
          <CalendarSlot
            name={data?.appointment.name}
            status={data?.appointment.status}
            cabinetNumber={data?.appointment.cabinetNumber}
          />
        );

      return null;
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

  return (
    <Calendar
      localizer={localizer}
      defaultView="week"
      events={recordIntervals}
      style={{ height: '100vh' }}
      formats={formats}
      components={components}
    />
  );
}, 'RecordsCalendar');
