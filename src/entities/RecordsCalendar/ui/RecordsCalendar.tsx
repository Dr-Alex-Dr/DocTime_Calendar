import { cloneElement, useMemo, useState } from 'react';
import { createObserver } from '../../../shared/utils/MobxUtils';
import { Calendar, Culture, DateLocalizer, EventProps, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { EventItem, RecordsCalendarStore } from '../model/RecordsCalendarStore';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './RecordsCalendar.scss';
import 'moment/dist/locale/ru';
import { AppointmentEvent } from './AppointmentEvent';

export const RecordsCalendar = createObserver((props: any) => {
  const recordsCalendarStore = new RecordsCalendarStore();
  const { recordIntervals } = recordsCalendarStore;

  const localizer = momentLocalizer(moment);

  const statusColors: Record<string, string> = {
    'Первичный прием': '#BDFFDB',
    'Повторный осмотр': '#FFEBB7',
    'Консультация ': '#FFDDDD',
  };

  const statusBorderColors: Record<string, string> = {
    'Первичный прием': '#8FDCB2',
    'Повторный осмотр': '#E7C160',
    'Консультация ': '#FDB7B7',
  };

  const statusFontColors: Record<string, string> = {
    'Первичный прием': '#2C5A41',
    'Повторный осмотр': '#684D08',
    'Консультация ': '#721818',
  };

  const eventPropGetter = (event: any) => {
    const status = event?.data?.appointment?.status;
    return {
      style: {
        backgroundColor: statusColors[status],
        color: statusFontColors[status],
        border: `1px solid ${statusBorderColors[status]}`,
        borderRadius: '5px',
        padding: '5px',
      },
    };
  };

  const components: any = {
    event: ({ event }: EventProps<EventItem>) => {
      const data = event?.data;
      if (data?.appointment)
        return (
          <AppointmentEvent
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
      view={props.currentView}
      events={recordIntervals}
      style={{ height: '100vh' }}
      formats={formats}
      components={components}
      date={props.currentDate}
      onNavigate={(date) => props.setCurrentDate(date)}
      eventPropGetter={eventPropGetter}
    />
  );
}, 'RecordsCalendar');
