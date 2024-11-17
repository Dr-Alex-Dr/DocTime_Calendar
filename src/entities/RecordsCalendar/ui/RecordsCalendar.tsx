import React, { useMemo } from 'react';
import { createObserver } from '../../../shared/utils/MobxUtils';
import { Calendar, Culture, DateLocalizer, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { RecordsCalendarStore } from '../model/RecordsCalendarStore';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './RecordsCalendar.scss';
import 'moment/dist/locale/ru';

export const RecordsCalendar = createObserver(() => {
  const recordsCalendarStore = new RecordsCalendarStore();
  const { recordIntervals } = recordsCalendarStore;

  const localizer = momentLocalizer(moment);

  const { formats } = useMemo(() => {
    const formatDate = (date: Date, format: string, culture?: Culture, localizer?: DateLocalizer) =>
      localizer?.format(date, format, culture) || '';

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
    />
  );
}, 'RecordsCalendar');
